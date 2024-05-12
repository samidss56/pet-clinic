<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Admin
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Admin Dashboard',
        ]);
    }
}
