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
        return Inertia::render('Superadmin/Appointments/Appointments', [
            'title' => 'Appointmens Management',
        ]);
    }

    public function detail()
    {
        return Inertia::render('Superadmin/Appointments/DetailAppointment', [
            'title' => 'Detail Appointment',
        ]);
    }
}
