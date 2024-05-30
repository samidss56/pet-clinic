<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Service;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Events\TransactionPaid;
use App\Models\TransactionDetail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\TransactionResource;
use App\Http\Resources\TransactionAdminResource;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index()
    {
        $trans = Transaction::latest()->paginate(5);
        return Inertia::render('Admin/Transaction/Index', [
            'title' => 'Transaction Management',
            'transaction' => TransactionAdminResource::collection($trans),
        ]);
    }

    public function edit(Transaction $transaction)
    {
        $transactionDetails = $transaction->details;
        $services = Service::all();
        $products = Product::all();
        // dd($transactionDetails);
        $appointment = $transaction->appoitment->pet;
        $owner = $transaction->appoitment->pet->user;
        // dd($user);
        return inertia('Admin/Transaction/Edit', [
            'transaction' => $transaction,
            'transactionDetails' => $transactionDetails,
            'services' => $services,
            'products' => $products,
            'appointment' => $appointment,
            'owner' => $owner
        ]);
    }

    public function update(Request $request, Transaction $transaction)
    {
        // return $request;
        $data_product = $transaction->details()->whereNotNull('product_id')->get()->keyBy('product_id')->toArray();

        if($request->payment_type == 'tunai')
        {
            $transaction->update([
                'invoice' => $request->invoice,
                'user_id' => $request->user_id,
                'appointmen_id' => $request->appointmen_id,
                'date_transaction' => $request->date_transaction,
                'status_payment' => 'settlement',
                'payment_type'=> json_encode($request->payment_type),
                'payment_info'=> 'tunai',
                'succeeded_at'=> date('Y-m-d H:i:s'),
                'subtotal' => $request->subtotal,
            ]);

            Appointmen::where('appointmen_id', $request->appointmen_id)->update([
                'status' => 'finished'
            ]);

            $oldServices = $transaction->details()->whereNotNull('service_id')->pluck('service_id')->toArray();

            if ($request->has('services')) {
                foreach ($request->services as $service) {
                    if ($service['service_id'] !== null && $service['price_service'] !== null) {
                        TransactionDetail::updateOrCreate([
                            'transaction_id' => $transaction->id,
                            'service_id' => $service['service_id'],
                        ], [
                            'harga_service' => $service['price_service'],
                        ]);
                    }
                }
            }
            $totalQuantity = 0;
            if ($request->has('products')) {
                foreach ($request->products as $product) {
                    if ($product['product_id'] !== null && $product['price_product'] !== null && $product['qty'] !== null) {
                        $detail_trans = TransactionDetail::where('transaction_id', $transaction->id)
                        ->where('product_id', $product['product_id'])
                        ->first();

                        if ($detail_trans) {
                            $qty_value = $detail_trans->quantity - $product['qty'];
                            // $totalQuantity += $qty_value;

                            $detail_trans->update([
                                'quantity' => $product['qty'],
                                'harga_product' => $product['price_product'],
                            ]);
                        } else {
                            $qty_value = -$product['qty'];
                            // $totalQuantity += $qty_value;
                            TransactionDetail::create([
                                'transaction_id' => $transaction->id,
                                'product_id' => $product['product_id'],
                                'quantity' => $product['qty'],
                                'harga_product' => $product['price_product'],
                            ]);
                        }

                        $productModel = Product::where('product_id', $product['product_id'])->first();
                        if ($productModel) {
                            $productModel->stock_product += $qty_value;
                            $productModel->save();
                        }

                        // TransactionDetail::updateOrCreate([
                        //     'transaction_id' => $transaction->id,
                        //     'product_id' => $product['product_id'],
                        // ], [
                        //     'quantity' => $product['qty'],
                        //     'harga_product' => $product['price_product'],
                        // ]);
                    }
                }
            }
            // dd($totalQuantity);
            // $removedProducts = array_diff($oldProducts, array_column($request->products, 'product_id'));
            $oldProducts = array_keys($data_product);
            $removedProducts = array_diff($oldProducts, array_column($request->products, 'product_id'));

            foreach ($removedProducts as $productId) {
                if (isset($data_product[$productId])) {

                    $productModel = Product::where('product_id', $productId)->first();
                    if ($productModel) {
                        $productModel->stock_product += $data_product[$productId]['quantity'];
                        $productModel->save();

                        TransactionDetail::where('transaction_id', $transaction->id)
                            ->where('product_id', $productId)
                            ->delete();
                    }
                }
            }

            // TransactionDetail::where('transaction_id', $transaction->id)
            //                 ->whereIn('product_id', $removedProducts)
            //                 ->delete();

            $removedServices = array_diff($oldServices, array_column($request->services, 'service_id'));

            TransactionDetail::where('transaction_id', $transaction->id)
                            ->whereIn('service_id', $removedServices)
                            ->delete();

            return Inertia::location(route('admin.transaction'));
        }else {

            $transaction->update([
                'invoice' => $request->invoice,
                'user_id' => $request->user_id,
                'appointmen_id' => $request->appointmen_id,
                'date_transaction' => $request->date_transaction,
                'payment_type'=> json_encode($request->payment_type),
                'subtotal' => $request->subtotal,
            ]);

            $oldServices = $transaction->details()->whereNotNull('service_id')->pluck('service_id')->toArray();

            if ($request->has('services')) {
                foreach ($request->services as $service) {
                    if ($service['service_id'] !== null && $service['price_service'] !== null) {
                        TransactionDetail::updateOrCreate([
                            'transaction_id' => $transaction->id,
                            'service_id' => $service['service_id'],
                        ], [
                            'harga_service' => $service['price_service'],
                        ]);
                    }
                }
            }

            if ($request->has('products')) {
                foreach ($request->products as $product) {
                    if ($product['product_id'] !== null && $product['price_product'] !== null && $product['qty'] !== null) {

                        $detail_trans = TransactionDetail::where('transaction_id', $transaction->id)
                        ->where('product_id', $product['product_id'])
                        ->first();

                        if ($detail_trans) {
                            $qty_value = $detail_trans->quantity - $product['qty'];
                            $detail_trans->update([
                                'quantity' => $product['qty'],
                                'harga_product' => $product['price_product'],
                            ]);
                        } else {
                            $qty_value = -$product['qty'];
                            TransactionDetail::create([
                                'transaction_id' => $transaction->id,
                                'product_id' => $product['product_id'],
                                'quantity' => $product['qty'],
                                'harga_product' => $product['price_product'],
                            ]);
                        }

                        $productModel = Product::where('product_id', $product['product_id'])->first();
                        if ($productModel) {
                            $productModel->stock_product += $qty_value;
                            $productModel->save();
                        }
                    }
                }
            }

            $oldProducts = array_keys($data_product);
            $removedProducts = array_diff($oldProducts, array_column($request->products, 'product_id'));

            foreach ($removedProducts as $productId) {
                if (isset($data_product[$productId])) {

                    $productModel = Product::where('product_id', $productId)->first();
                    if ($productModel) {
                        $productModel->stock_product += $data_product[$productId]['quantity'];
                        $productModel->save();

                        TransactionDetail::where('transaction_id', $transaction->id)
                            ->where('product_id', $productId)
                            ->delete();
                    }
                }
            }

            $removedServices = array_diff($oldServices, array_column($request->services, 'service_id'));

            TransactionDetail::where('transaction_id', $transaction->id)
                            ->whereIn('service_id', $removedServices)
                            ->delete();

            $transactionDetails = $transaction->details()->with(['service', 'product'])->get();

            // dd($transactionDetails);

            $data = [
                'payment_type' => $request->payment_type,
                'transaction_details' => [
                    'gross_amount' => $request->subtotal,
                    'order_id' => $transaction->invoice,
                ],
                'customer_details' => [
                    'email' => $request->user()->email,
                    'name' => $request->user()->name,
                ],

                'item_details' => $transactionDetails->map(function ($detail) {
                    if ($detail->service) {
                        return [
                            'id' => $detail->service->service_id,
                            'price' => (int) $detail->harga_service,
                            'quantity' => 1,
                            'name' => $detail->service->name_service,
                        ];
                    } else if ($detail->product) {
                        return [
                            'id' => $detail->product->product_id,
                            'price' => (int) $detail->harga_product,
                            'quantity' => $detail->quantity,
                            'name' => $detail->product->name_product,
                        ];
                    }
                    return null;
                })->filter()->toArray(),
            ];

            // dd($data);

            if ($request->payment_type == 'bank_transfer') {

                $data = [...$data, 'bank_transfer' => [
                    'bank' => $request->bank,
                ]];
            }
                        
            $response = Http::withBasicAuth('KEY' . ':', '')
                        ->post('/', $data);
                        

            $body = $response->json();

            // dd($body);

            $transaction->update([
                'payment_info' => [
                    'qr_code' => $request->payment_type == 'gopay' ? $body['actions'][0]['url'] : null,
                    'bank' => $request->payment_type == 'bank_transfer' ? [
                        'bank' => $body['va_numbers'][0]['bank'],
                        'va_number' => $body['va_numbers'][0]['va_number'],
                    ] : null,
                ]
            ]);

            return Inertia::location(route('transaction.show', $transaction));
        }
    }

    public function show(Transaction $transaction)
    {
        // return new TransactionResource($transaction);
        return inertia('Admin/Transaction/Show',[
            'transaction' => new TransactionResource($transaction),
        ]);
    }

    public function notif(Request $request)
    {
        $trans = Transaction::where('invoice',$request->order_id)->first();
        $grossAmount = $trans->subtotal.'.00';
        $signature_key = hash("sha512",$request->order_id.$request->status_code.$grossAmount."SB-Mid-server-NkRlkjLekago7U4vbZCWEn-m");
        if($request->signature_key == $signature_key)
        {
            if($request->transaction_status == 'settlement')
            {
                $trans->update([
                    'status_payment' => $request->transaction_status,
                    'succeeded_at' => $request->settlement_time,
                ]);

                Appointmen::where('appointmen_id', $trans->appointmen_id)->update([
                    'status' => 'finished',
                ]);

                broadcast(new TransactionPaid($trans));
            }
        }
    }

}
