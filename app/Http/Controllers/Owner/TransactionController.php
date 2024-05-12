<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index()
    {
        return Inertia::render('Owner/Transaction', [
            'title' => 'Your Transactions',
        ]);
    }
}
