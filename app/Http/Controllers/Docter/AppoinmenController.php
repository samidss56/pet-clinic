<?php

namespace App\Http\Controllers\Docter;

use Inertia\Inertia;
use App\Models\Jadwal;
use App\Models\Product;
use App\Models\Service;
use App\Models\Appointmen;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\TransactionDetail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\AppoitmenDocterResource;

class AppoinmenController extends Controller
{
    // Tampil Halaman Manage Appoinmen
    public function index()
    {
        $kode_docter = Auth::guard('docter')->user()->docter_id;
        $docter = Appointmen::query()->where('docter_id',$kode_docter)->latest()->paginate(5);
        // return AppoitmenDocterResource::collection($docter);
        return Inertia::render('Docter/Appointments/Index', [
            'title' => 'Appointmens Management',
            'docter_app' => AppoitmenDocterResource::collection($docter),
        ]);
    }

    public function updatestatus(Appointmen $appointmen)
    {
        $appointmen->update([
            'status' => 'accepted',
        ]);
        return Inertia::location(route('docter.appointmen'));
    }

    public function edit(Appointmen $appointmen)
    {
        // return new AppoitmenDocterResource($appointmen);
        return inertia('Docter/Appointments/Edit',[
            'title' => 'Edit Appointmens Management',
            'appointmen' => new AppoitmenDocterResource($appointmen),
            'services' => Service::all(),
            'products' => Product::all(),
        ]);
    }

    public function updatetrans(Request $request, appointmen $appointmen)
    {
        // return $request;
        // $validator = Validator::make($request->all(), [
        //     'status' => 'required',
        //     'date_appointmens' => 'required',
        //     'weight' => 'required',
        //     'temperature' => 'required',
        //     'advice' => 'required',
        // ]);

        // if ($validator->fails()) {
        //     return redirect()->back()
        //         ->withErrors($validator)
        //         ->withInput();
        // }
        
        // return $request;

        $invoice = date('ymdhis');

        $appointmen->update([
            'appointmen_id' => $request->appointmen_id,
            'pet_id' => $request->pet_id,
            'docter_id' => $request->docter_id,
            'status' => $request->status,
            'jadwal' => $request->jadwal,
            'date_appointmens' => $request->date_appointmens,
            'description' => $request->description,
            'weight' => $request->weight,
            'temperature' => $request->temperature,
            'advice' => $request->advice,
        ]);

        
        $jadwal = Jadwal::where('docter_id', $request->docter_id)
                    ->where('schedule', $request->jadwal)
                    ->first();

        $jadwal->update([
            'is_aktif' => '1'
        ]);

        $transaction = Transaction::create([
            'invoice' => $invoice,
            'appointmen_id' => $request->appointmen_id,
            'status_payment' => 'pending',
            'date_transaction' => date('Y-m-d H:i:s'),
            'subtotal' => $request->subtotal,
        ]);

        foreach ($request->services as $service) {
            if ($service['service_id'] !== null && $service['price_service'] !== null) {
                TransactionDetail::create([
                    'transaction_id' => $transaction->id,
                    'service_id' => $service['service_id'],
                    'harga_service' => $service['price_service'],
                ]);
            }
        }
        
        foreach ($request->products as $product) {
            if ($product['product_id'] !== null && $product['name_product'] !== null && $product['price_product'] !== null && $product['qty'] !== null) {
                TransactionDetail::create([
                    'transaction_id' => $transaction->id,
                    'product_id' => $product['product_id'],
                    'quantity' => $product['qty'],
                    'harga_product' => $product['price_product'],
                ]);

                $product_stock = Product::where('product_id',$product['product_id'])->first();
                if($product_stock)
                {
                    $product_stock->stock_product -= $product['qty'];
                    $product_stock->save();
                }
                
            }
        }

        


        return Inertia::location(route('docter.appointmen'));
    }
}
