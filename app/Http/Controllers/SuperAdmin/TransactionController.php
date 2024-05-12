<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    // Tampil Halaman Manage Transaction
    public function index()
    {
        return Inertia::render('SuperAdmin/Transactions', [
            'title' => 'Transactions Management',
        ]);
    }
}
