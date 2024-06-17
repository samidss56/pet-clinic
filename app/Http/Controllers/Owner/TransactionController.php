<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionOwnerResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index(Request $request)
    {
        $transaction = Transaction::whereBelongsTo($request->user())->latest()->paginate(10);
        // return TransactionOwnerResource::collection($transaction);
        return Inertia::render('Owner/Transactions/Index', [
            'title' => 'Your Transactions',
            'transaction' => TransactionOwnerResource::collection($transaction),
        ]);
    }
}
