<?php

namespace App\Http\Controllers\Owner;

use App\Models\Cart;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Product;
use Illuminate\Support\Facades\Http;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $carts = Cart::query()->with('product')->whereBelongsTo($request->user())->whereNull('paid_at')->get();

        return Inertia::render('Owner/Cart/Index', [
            'title' => 'Cart Page',
            'cart' => CartResource::collection($carts),
        ]);
    }

    public function updateqty(Request $request, Cart $cart)
    {
        $newQty = $request->input('qty');
        $cart->update([
            'qty' => $newQty
        ]);

        return Inertia::location(url()->previous());
    }

    public function store(Request $request, Product $product)
    {

        $product->carts()->updateOrCreate([
            'user_id' => $request->user()->user_id,
            'product_id' => $product->product_id,
        ],[
            'user_id' => $request->user()->user_id,
            'price' => $product->price_product,
            'qty' => 1,
        ]);

        return Inertia::location(route('owner.cart'));
    }

    public function delete(Cart $cart)
    {
        $cart->delete();
        return Inertia::location(route('owner.cart'));
    }

    public function getProvinces()
    {
        $apiKey = env('RAJAONGKIR_API_KEY');

        $response = Http::withHeaders([
            'key' => $apiKey,
        ])->withOptions([
            'verify' => false,
        ])->get('https://api.rajaongkir.com/starter/province');

        return response()->json($response->json());
    }

    public function getCities()
    {
        $apiKey = env('RAJAONGKIR_API_KEY');

        $response = Http::withHeaders([
            'key' => $apiKey,
        ])->withOptions([
            'verify' => false,
        ])->get('https://api.rajaongkir.com/starter/city');

        return response()->json($response->json());
    }

    public function onkir(Request $request)
    {
        $apiKey = env('RAJAONGKIR_API_KEY');

        $response = Http::withHeaders([
            'key' => $apiKey,
        ])->withOptions([
            'verify' => false,
        ])->post('https://api.rajaongkir.com/starter/cost',[
            "origin" => $request->origin,
            "destination" => $request->destination,
            "weight" => $request->weight,
            "courier" => $request->courier
        ]);

        return response()->json($response->json());
    }
}
