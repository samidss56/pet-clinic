<?php

namespace App\Http\Controllers\Docter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Docter
    public function index()
    {
        return Inertia::render('Docter/Dashboard', [
            'title' => 'Docter Dashboard',
        ]);
    }
}
