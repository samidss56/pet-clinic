<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    // Tampil Halaman Manage Product
    public function index()
    {
        $products = new ProductCollection(Product::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Superadmin/Products/Index', [
            'title' => 'Products Management',
            'products' => $products
        ]);
    }

    // Tampil Halaman Create Product
    public function create()
    {
        return Inertia::render('Superadmin/Products/Create', [
            'title' => 'Create Product'
        ]);
    }

    // Create Product
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_product' => 'required|string|max:255',
            'deskripsi_product' => 'required|string|',
            'price_product' => 'required|integer',
            'image_product' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'stock_product' => 'required|integer',
            'weight' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $product_id = 'PRD-' . date('ymdhis');

        $product = new Product;
        $product->product_id = $product_id;
        $product->name_product = $request->name_product;
        $product->slug = Str::slug($request->name_product);
        $product->deskripsi_product = $request->deskripsi_product;
        $product->price_product = $request->price_product;
        $product->stock_product = $request->stock_product;
        $product->weight = $request->weight;

        if ($request->hasFile('image_product')) {
            $imageName = uniqid('product_') . '.' . $request->image_product->getClientOriginalExtension();
            $path = $request->image_product->storeAs('images/products', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $product->image_product = $path;
        }

        $product->save();

        return redirect('/superadmin/products')->with(['message' => 'Product Added Successfully!', 'product' => $product], 201);
    }

    // Tampil Halaman Update Product
    public function edit(Product $product)
    {
        $productData = Product::find($product->product_id);
        return Inertia::render('Superadmin/Products/Edit', [
            'title' => 'Update Product',
            'product' => $productData
        ]);
    }

    // Update Product
    public function update(Request $request, Product $product)
    {
        if ($request->hasFile('image_product')) {
            $imageName = uniqid('product_') . '.' . $request->file('image_product')->getClientOriginalExtension();
            $path = $request->file('image_product')->storeAs('images/products', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            Storage::disk('public')->delete($product->image_product);
            $product->image_product = $path;
        }

        $product->update([
            'name_product' => $request->name_product,
            'deskripsi_product' => $request->deskripsi_product,
            'price_product' => $request->price_product,
            'stock_product' => $request->stock_product,
            'weight' => $request->weight,
        ]);

        return redirect('/superadmin/products')->with(['message' => 'Product Updated Successfully!', 'product' => $product], 200);
    }

    // Delete Product
    public function destroy(Product $product)
    {
        Storage::disk('public')->delete($product->image_product);
        $product->delete();
        return redirect('/superadmin/products')->with(['message' => 'Product Deleted Successfully!', 'product' => $product], 200);
    }
}
