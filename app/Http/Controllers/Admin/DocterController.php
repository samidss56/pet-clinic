<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocterController extends Controller
{
    // Tampil Halaman Manage Docter
    public function index()
    {
        return Inertia::render('Admin/Docter', [
            'title' => 'Docter Management',
        ]);
    }
}
