<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // Tampil Halaman Manage User
    public function index()
    {
        return Inertia::render('SuperAdmin/Users', [
            'title' => 'Users Management',
        ]);
    }
}
