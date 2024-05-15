<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Tampil Halaman Manage Product
    public function index()
    {
        $products = new ProductCollection(Product::orderByDesc('created_at')->paginate(10));
        return Inertia::render('Admin/Products/Products', [
            'title' => 'Products Management',
            'products' => $products
        ]);
    }

    // Tampil Halaman Create Product
    public function createProductPage()
    {
        return Inertia::render('Admin/Products/CreateProduct', [
            'title' => 'Create Product'
        ]);
    }

    // Create Product
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_product' => 'required|string|max:255',
            'deskripsi_product' => 'required|string|',
            'price_product' => 'required|string|max:255',
            'image_product' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'stock_product' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $product_id = 'PRD-' . date('ymdhis');

        $product = new Product;
        $product->product_id = $product_id;
        $product->name_product = $request->name_product;
        $product->deskripsi_product = $request->deskripsi_product;
        $product->price_product = $request->price_product;
        $product->stock_product = $request->stock_product;

        if ($request->hasFile('image_product')) {
            $imageName = uniqid('product_') . '.' . $request->image_product->getClientOriginalExtension();
            $path = $request->image_product->storeAs('images/products', $imageName, 'public');
            if (!$path) {
                return response()->json(['error' => 'Failed to upload image'], 500);
            }
            $product->image_product = $path;
        }

        $product->save();

        return redirect()->route('admin.products');
    }

    // Tampil Halaman Update Product
    public function updateProductPage(Product $product)
    {
        $productData = Product::find($product->product_id);
        return Inertia::render('Admin/Products/UpdateProduct', [
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
        ]);

        return redirect()->route('admin.products');
    }

    // Delete Product
    public function destroy(Product $product)
    {
        Storage::disk('public')->delete($product->image_product);
        $product->delete();
        return redirect()->route('admin.products');
    }
}
