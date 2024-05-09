<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmenController extends Controller
{
    public function index()
    {
        return Inertia::render('Owner/Appoinmens', [
            'title' => 'Your Appointmens',
        ]);
    }
}
