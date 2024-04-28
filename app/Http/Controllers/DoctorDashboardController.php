<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Doctor/Dashboard', [
            'title' => 'Doctor Dashboard',
        ]);
    }
}
