<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    public function index()
    {
        return Inertia::render('SuperAdmin/Jadwals', [
            'title' => 'Jadwals Management',
        ]);
    }
}
