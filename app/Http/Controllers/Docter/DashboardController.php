<?php

namespace App\Http\Controllers\Docter;

use Inertia\Inertia;
use App\Models\Appointmen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Jadwal;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    // Tampil Halaman Dashboard Docter
    public function index(Request $request)
    {
        $doctorId = Auth::guard('docter')->user()->docter_id;
        $selesai = Appointmen::where('docter_id', $doctorId)->where('status', 'finished')->count();
        $cancel = Appointmen::where('docter_id', $doctorId)->where('status', 'rejected')->count();
        $proses = Appointmen::where('docter_id', $doctorId)
        ->where(function ($query) {
            $query->where('status', 'accepted')
                  ->orWhere('status', 'pending')
                  ->orWhere('status', 'handled');
        })
        ->count();

        $appoitmentsPerbulan = Appointmen::where('docter_id', $doctorId)
        ->select(
            DB::raw('MONTH(date_appointmens) as month'),
            DB::raw('SUM(CASE WHEN status = "finished" THEN 1 ELSE 0 END) as selesai'),
            DB::raw('SUM(CASE WHEN status = "pending" THEN 1 ELSE 0 END) + SUM(CASE WHEN status = "accepted" THEN 1 ELSE 0 END) + SUM(CASE WHEN status = "handled" THEN 1 ELSE 0 END) as proses')
        )
        ->groupBy(DB::raw('MONTH(date_appointmens)'))
        ->get();

        $jadwal = Jadwal::where('docter_id', $doctorId)->where('is_aktif','1')->count();

        // return $appoitmentsPerbulan;

        return Inertia::render('Docter/Dashboard', [
            'title' => 'Docter Dashboard',
            'selesai' => $selesai,
            'cancel' => $cancel,
            'proses' => $proses,
            'appoitmentsPerbulan' => $appoitmentsPerbulan,
            'jadwal' => $jadwal
        ]);
    }
}
