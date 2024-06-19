<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductTransResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductTransController extends Controller
{
    public function index()
    {
        $transaction = Transaction::where('appointmen_id', '=', null)->latest()->paginate(5);
        return Inertia::render('Admin/ProductTrans/Index', [
            'title' => 'Product Transaction Management',
            'transactions' => ProductTransResource::collection($transaction),
        ]);
    }

    public function show(Transaction $transaction)
    {
        return Inertia::render('Admin/ProductTrans/Show', [
            'title' => 'Detail Transaction',
            'transaction' => new ProductTransResource($transaction),
        ]);
    }
}
