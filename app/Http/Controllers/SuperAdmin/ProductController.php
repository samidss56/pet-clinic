<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Tampil Halaman Manage Product
    public function index()
    {
        return Inertia::render('SuperAdmin/Products', [
            'title' => 'Products Management',
        ]);
    }
}
