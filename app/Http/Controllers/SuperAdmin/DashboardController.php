<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Super Admin
    public function index()
    {
        return Inertia::render('SuperAdmin/Dashboard', [
            'title' => 'Super Admin Dashboard',
        ]);
    }
}
