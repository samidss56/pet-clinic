<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppoitmenOwnerResource;
use App\Models\Appointmen;
use App\Models\Docter;
use App\Models\Jadwal;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $appoitment = Appointmen::query()
        ->whereHas('pet', function ($query) {
            $query->where('user_id', Auth::id());
        })
        ->with('pet', 'docter')
        ->latest()
        ->paginate(5);

        // return  AppoitmenOwnerResource::collection($appoitment);

        Appointmen::where('status', 'pending')
        ->whereDate('date_appointmens', '<', now())
        ->update(['status' => 'expired']);

        return Inertia::render('Owner/Appointments/Index', [
            'title' => 'Your Appointmens',
            'appointments' => AppoitmenOwnerResource::collection($appoitment),
        ]);
    }

    public function create($pet_id)
    {   
        $pets = Pet::get();
        $docters = Docter::get();
        $pet_id = Pet::find($pet_id);
    
        return inertia('Owner/Appointments/Create',[
            'title' => 'Create Your Appointmens',
            'pet_id' => $pet_id,
            'pets' => $pets,
            'docters' => $docters,
        ]);
    }

    public function getJadwal($docter_id)
    {
        $jadwals = Jadwal::where('docter_id', $docter_id)->get();
        return response()->json($jadwals);
    }

    public function store(Request $request)
    {
        // return $request;

        $appointmen_id = 'APT-' .date('ymdhis');

        Appointmen::create([
            'appointmen_id' => $appointmen_id,
            'pet_id' => $request->pet_id,
            'docter_id' => $request->docter_id,
            'date_appointmens' => $request->date_appointmens,
            'status' => 'pending',
            'description' => $request->description,
            'jadwal' => $request->jadwal,
            
        ]);

        return Inertia::location(route('owner.appointmen'));
    }

    public function update(Request $request, Appointmen $appointmen)
    {
        $appointmen->update([
            'status' => 'rejected',
        ]);
        return Inertia::location(route('owner.appointmen'));
    }
}
