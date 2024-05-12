<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // Tampil Halaman Manage Service
    public function index()
    {
        return Inertia::render('SuperAdmin/Services', [
            'title' => 'Services Management',
        ]);
    }
}
