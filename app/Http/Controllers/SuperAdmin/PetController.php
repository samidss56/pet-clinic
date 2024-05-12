<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetController extends Controller
{
    // Tampil Halaman Manage Pet
    public function index()
    {
        return Inertia::render('SuperAdmin/Pets', [
            'title' => 'Pets Management',
        ]);
    }
}
