<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    // Tampil Halaman Manage Role
    public function index()
    {
        return Inertia::render('SuperAdmin/Roles', [
            'title' => 'Roles Management',
        ]);
    }
}
