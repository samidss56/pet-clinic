<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = new ProductCollection(Product::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Products/Products', [
            'title' => 'Products Management',
            'products' => $products
        ]);
    }
}
