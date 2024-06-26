<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    // Tampil Halaman Manage Jadwal
    public function index()
    {
        return Inertia::render('Admin/Jadwals', [
            'title' => 'Jadwals Management',
        ]);
    }
}
