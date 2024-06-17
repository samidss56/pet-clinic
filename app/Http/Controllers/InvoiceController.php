<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Events\TransactionPaid;
use App\Models\TransactionDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Resources\InvoiceResource;
use App\Models\Product;

class InvoiceController extends Controller
{
    public $serveykey;
    public function store(Request $request)
    {
        // return $request;
        // dd($request->all());
        $total = (int) $request->subtotal;
        $cart_ids = $request->has('cart_ids') ? $request->cart_ids : $request->collect('cart')->pluck('id')->toArray();
        $order_id = now()->format('YH') . $request->user()->user_id . implode('', $cart_ids);
        // $order_id = now()->timestamp;
        $invoiceExists = Transaction::where('invoice', $order_id)->firstOr(fn () => false);

        if ($invoiceExists) {
            $payment_info = $invoiceExists->payment_info;
            if ($payment_info && isset($payment_info['token'])) {
                return response()->json(['token' => $payment_info['token']]);
            }
        } else {
            $transaction = Auth::user()->invoices()->updateOrCreate([
                'invoice' => $order_id,
            ],[
                'invoice'=> $order_id,
                'status_payment' => 'pending',
                'date_transaction' => now(),
                'subtotal'=> $total,
                'cart_ids'=> $cart_ids,
            ]);
    
            foreach ($request->cart as $product) {
                if ($product['product']['product_id'] !== null && $product['product']['name_product'] !== null && $product['price'] !== null && $product['qty'] !== null) {
                    TransactionDetail::create([
                        'transaction_id' => $transaction->id,
                        'product_id' => $product['product']['product_id'],
                        'quantity' => $product['qty'],
                        'harga_product' => $product['price'],
                    ]);
                }
            }
    
            $item_details = $request->collect('cart')->map(function ($item) {
                return [
                    'id' => $item['id'],
                    'price' => (int) (round((11/100) * $item['price'], 0) + $item['price']),
                    'quantity' => $item['qty'],
                    'name' => $item['product']['name_product'],
                ];
            });

            $shipping_details = [
                'id' => 'shipping_fee',
                'price' => $request->ongkos,
                'quantity' => 1,
                'name' => 'Ongkos Kirim',
            ];
    
            $item_details->push($shipping_details);
    
            $data = [
                "enabled_payments" => ["bri_epay", "echannel", "permata_va",
                "bca_va", "bni_va", "bri_va","cimb_va", "other_va", "gopay", "indomaret",
                "shopeepay", "uob_ezpay","other_qris" ],
                'transaction_details' => [
                  'gross_amount' => $total,
                  'order_id' => $order_id,
                ],
                'customer_details' => [
                  'email' => $request->user()->email,
                  'name' =>  $request->user()->name,
                ],
                'expiry' => [
                    'start_time' => now()->format("Y-m-d H:i:s T"),
                    'unit' => 'days',
                    'duration' => 1,
                ],
                'item_details' => $item_details->toArray(),
            ];

            // dd($data);

            $serverKey = env('MIDTRANS_SERVER_API_KEY');
    
            $headers = [
                'Authorization' => 'Basic '.base64_encode($serverKey),
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ];
    
            $url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
            $response = Http::withHeaders($headers)->post($url, $data);
            $responseJson = $response->json();

            // dd($responseJson);

            $transaction->update([
                'payment_info' => [
                    'token' => $responseJson['token'],
                    'redirect_url' => $responseJson['redirect_url'],
                ],
            ]);

            Cart::whereIn('id', $transaction->cart_ids)->delete();
    
            return response()->json(['token' => $responseJson['token']]);
        }

    }

    public function show()
    {
        return inertia('InvoiceShow');
    }

    public function notifecom(Request $request)
    {
        $transaction = Transaction::where('invoice', $request->order_id)->first();

        if (!$transaction) {
            return response()->json(['error' => 'Transaction not found'], 404);
        }
        $serverKey = env('MIDTRANS_SERVER_API_KEY');

        $grossAmount = $transaction->subtotal . '.00';
        $signature_key = hash("sha512",$request->order_id.$request->status_code.$grossAmount. $serverKey);

        if($request->signature_key == $signature_key)
        {
            if($transaction->appointmen_id != null)
            {
                $transaction->update([
                    'status_payment' => $request->transaction_status,
                    'succeeded_at' => $request->settlement_time,
                ]);
                Appointmen::where('appointmen_id', $transaction->appointmen_id)->update([
                    'status' => 'finished',
                ]);
                broadcast(new TransactionPaid($transaction));
            }else{
                $transaction->update([
                    'status_payment' => $request->transaction_status,
                    'succeeded_at' => $request->settlement_time,
                    'payment_type' => $request->payment_type,
                ]);

                if ($request->transaction_status == 'settlement') {
                    $transactionDetails = TransactionDetail::where('transaction_id', $transaction->id)->get();
    
                    foreach ($transactionDetails as $detail) {
                        if ($detail->product_id) {
                            $product = Product::where('product_id', $detail->product_id)->first();
                            if ($product) {
                                $product->decrement('stock_product', $detail->quantity);
                            }
                        }
                    }
                }
            }
         
        }
        return response()->json(['message' => 'Transaction updated successfully']);
    }
}
