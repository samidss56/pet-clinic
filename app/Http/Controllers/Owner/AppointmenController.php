<?php

namespace App\Http\Controllers\Owner;

use App\Models\Pet;
use Inertia\Inertia;
use App\Models\Docter;
use App\Models\Jadwal;
use App\Models\Appointmen;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\AppoitmenOwnerResource;

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

        $expired = Appointmen::where('status', 'pending')
        ->whereDate('date_appointmens', '<', now())
        ->get();

        foreach ($expired as $appointments) {
            // dd($appointments);
            $appointments->update(['status' => 'expired']);

            $jadwal = Jadwal::where('docter_id', $appointments->docter_id)
                ->where('schedule', $appointments->jadwal)
                ->first();

            if ($jadwal) {
                $jadwal->update(['is_aktif' => '1']);
            }
        }

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

        // $existingAppointment = Appointmen::where('docter_id', $request->docter_id)
        // ->where('jadwal', $request->jadwal)
        // ->first();

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

        $jadwal = Jadwal::where('docter_id', $request->docter_id)
                    ->where('schedule', $request->jadwal)
                    ->first();

        $jadwal->update([
            'is_aktif' => '2'
        ]);

        $docter = Docter::where('docter_id', $request->docter_id)->first();

        if($docter)
        {
            $message = "🔔 *Appointment Request*\n\n";
            $message .= "Anda memiliki permintaan Appointment baru dengan kode : *{$appointmen_id}*.\n\n";
            $message .= "Pada Tanggal : *{$request->date_appointmens}*.\n\n";
            $message .= "Pada Jam : *{$request->jadwal}*.\n\n";
            $message .= "Dan Pesan : *{$request->description}*.\n\n";
            $message .= "Harap respon sesegera mungkin sebelum masa berlakunya habis. ✅\n\n";
            $message .= "Thank you! 🙏";

            Http::withHeaders([
                'Authorization' => 'KEY',
            ])->withOptions([
                'verify' => false,
            ])->post('https://api.fonnte.com/send', [
                'target' => $docter->no_telp,
                'message' => $message,
            ]);
        }else {
            echo 'Doctor not found.';
        }

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
