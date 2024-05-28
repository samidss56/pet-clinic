<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmenController extends Controller
{
    // Tampil Halaman Manage Appoinmen
    public function index()
    {
        return Inertia::render('Superadmin/Appointments/Index', [
            'title' => 'Appointmens Management',
        ]);
    }

    public function detail()
    {
        return Inertia::render('Superadmin/Appointments/Show', [
            'title' => 'Detail Appointment',
        ]);
    }
}
