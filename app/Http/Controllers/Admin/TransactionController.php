<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index()
    {
        return Inertia::render('Admin/Transaction', [
            'title' => 'Transaction Management',
        ]);
    }
}
