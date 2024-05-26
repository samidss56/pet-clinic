<?php

namespace App\Http\Controllers\Docter;

use Inertia\Inertia;
use App\Models\Jadwal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\JadwalResource;
use App\Models\Docter;
use Illuminate\Support\Facades\Auth;

class JadwalController extends Controller
{
    // Tampil Halaman Dashboard Docter
    public function index()
    {
        $kode_docter = Auth::guard('docter')->user()->docter_id;
        $jadwals = Jadwal::query()
                ->with('docter')
                ->where('docter_id',$kode_docter)
                ->orderByRaw("FIELD(day, 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu') ASC")
                ->paginate(5);
        // return JadwalResource::collection($jadwals);
        return inertia('Docter/Jadwals/Index',[
            'title' => 'Jadwals Management',
            'jadwals' => JadwalResource::collection($jadwals),
        ]);
    }

    public function update(Request $request, Jadwal $jadwal)
    {
        $jadwal->update([
            'is_aktif' => $request->is_aktif,
        ]);
    
        return response()->json();
    }
}
