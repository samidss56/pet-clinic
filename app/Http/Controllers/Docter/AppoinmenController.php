<?php

namespace App\Http\Controllers\Docter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppoinmenController extends Controller
{
    // Tampil Halaman Manage Appoinmen
    public function index()
    {
        return Inertia::render('Docter/Appointmens', [
            'title' => 'Appointmens Management',
        ]);
    }
}
