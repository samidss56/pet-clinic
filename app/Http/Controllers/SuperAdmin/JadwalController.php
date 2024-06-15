<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\DocterResource;
use App\Http\Resources\JadwalResource;
use App\Models\Docter;
use App\Models\Jadwal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    // Tampil Halaman Manage Jadwal
    public function index()
    {
        // $jadwals = Jadwal::query()->with('docter')->latest()->paginate(50);
        $jadwals = Docter::latest()->paginate(10);
        return Inertia::render('Superadmin/Jadwals/Index', [
            'title' => 'Jadwals Management',
            'jadwals' => DocterResource::collection($jadwals),
            // 'jadwals' => $jadwals,
        ]);
    }

    public function edit(Jadwal $jadwal)
    {
        $doctorSchedule = $jadwal->docter->jadwal()->get(['schedule', 'day', 'is_aktif'])->toArray();
        // return $doctorSchedule;
        return inertia('Superadmin/Jadwals/Edit',[
            'jadwals' => new JadwalResource($jadwal),
            'doctorSchedule' => $doctorSchedule,
        ]);
    }

    public function update(Request $request, Jadwal $jadwal)
    {
        // return $request;
        // $request->validate([
        //     'schedules.*.schedule' => 'required|date_format:H:i',
        //     'schedules.*.day' => 'required|in:senin,selasa,rabu,kamis,jumat,sabtu,minggu',
        //     'schedules.*.is_aktif' => 'required|in:0,1',
        // ]);

        $jadwal_shedules = $request->input('schedules', []);
        $data = $jadwal->docter->jadwal()->get(['id', 'schedule', 'day', 'is_aktif'])->toArray();

        $delete = [];
        $update = [];

        foreach ($data as $item) {
            $existsInSubmitted = false;
            foreach ($jadwal_shedules as $submittedSchedule) {
                if ($item['schedule'] == $submittedSchedule['schedule'] &&
                    $item['day'] == $submittedSchedule['day'] &&
                    $item['is_aktif'] == $submittedSchedule['is_aktif']) {
                    $existsInSubmitted = true;
                    break;
                }
            }
            if (!$existsInSubmitted) {
                $delete[] = $item['id'];
            }
        }

        foreach ($jadwal_shedules as $submittedSchedule) {
            $existsInExisting = false;
            foreach ($data as $existingSchedule) {
                if ($existingSchedule['schedule'] == $submittedSchedule['schedule'] &&
                    $existingSchedule['day'] == $submittedSchedule['day'] &&
                    $existingSchedule['is_aktif'] == $submittedSchedule['is_aktif']) {
                    $existsInExisting = true;
                    break;
                }
            }
            if (!$existsInExisting) {
                $update[] = $submittedSchedule;
            }
        }


        foreach ($delete as $scheduleId) {
            $jadwal->docter->jadwal()->where('id', $scheduleId)->delete();
        }

        foreach ($update as $scheduleToUpdate) {
            $jadwal->docter->jadwal()->updateOrCreate(
                ['schedule' => $scheduleToUpdate['schedule'], 'day' => $scheduleToUpdate['day']],
                ['is_aktif' => $scheduleToUpdate['is_aktif']]
            );
        }

        return redirect('/superadmin/jadwal')->with(['message' => 'Doctor Schedules Updated Successfully!', 'jadwal' => $jadwal], 200);
    }
}
