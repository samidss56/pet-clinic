<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::query()->latest()->paginate(8);
        // return ProductResource::collection($products);
        return Inertia::render('Owner/Products/Index',[
            'product' => ProductResource::collection($products),
        ]);
    }

    public function show(Request $request, Product $product)
    {
        // return ProductResource::make($product);
        return Inertia::render('Owner/Products/Show',[
            'product' => ProductResource::make($product),
        ]);
    }
}
