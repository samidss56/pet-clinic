<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Owner
    public function index()
    {
        return Inertia::render('Owner/Dashboard', [
            'title' => 'Dashboard',
        ]);
    }
}
