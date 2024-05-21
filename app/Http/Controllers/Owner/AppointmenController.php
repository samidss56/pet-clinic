<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppoitmenOwnerResource;
use App\Models\Appointmen;
use App\Models\Docter;
use App\Models\Jadwal;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmenController extends Controller
{
    // Tampil Halaman Manage Appoinmen
    public $pet;
    public $docter;

    public function __construct()
    {
        $this->pet = Pet::get();
        $this->docter = Docter::get();
    }
    public function index()
    {
        $appoitment = Appointmen::query()->with('pet', 'docter')->latest()->paginate(5);
        // return AppoitmenOwnerResource::collection($appoitment);
        return Inertia::render('Owner/Appointments/Index', [
            'title' => 'Your Appointmens',
            'appointments' => AppoitmenOwnerResource::collection($appoitment),
        ]);
    }

    public function create()
    {   
        $pets = Pet::get();
        $docters = Docter::get();
    
        return inertia('Owner/Appointments/Create',[
            'title' => 'Create Your Appointmens',
            'pets' => $pets,
            'docters' => $docters,
        ]);
    }

    public function getJadwal($docter_id)
    {
        $jadwals = Jadwal::where('docter_id', $docter_id)->get();
        return response()->json($jadwals);
    }

    public function store()
    {

    }
}
