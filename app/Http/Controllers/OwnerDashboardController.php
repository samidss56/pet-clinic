<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OwnerDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Owner/Dashboard', [
            'title' => 'Dashboard',
        ]);
    }
}
