<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppoitmenAdminResource;
use App\Models\Appointmen;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmenController extends Controller
{
    // Tampil Halaman Manage Appoinmen
    public function index()
    {
        $app = Appointmen::query()
        ->with('pet', 'docter')
        ->latest()->paginate(5);
        // return AppoitmenAdminResource::collection($app);
        return Inertia::render('Admin/Appointmens/Index', [
            'title' => 'Appointmens Management',
            'appoitments' => AppoitmenAdminResource::collection($app),
        ]);
    }

    public function detail(Appointmen $appointmen)
    {
        return Inertia::render('Admin/Appointmens/Detail', [
            'title' => 'Appointmens Management',
            'appoitments' => AppoitmenAdminResource::make($appointmen->load('pet')),
        ]);
    }
}
