<?php

namespace Database\Seeders;

use App\Models\Docter;
use App\Models\Jadwal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $doctor_id = 'DR-' . date('ymdhis');

        Docter::create([
            'docter_id' => $doctor_id,
            'name' => 'Mr. Doctor',
            'email' => 'doctor@gmail.com',
            'password' => bcrypt('password'),
        ]);

        Jadwal::create([
            'id' => 1,
            'docter_id' => $doctor_id,
            'is_aktif' => '1',
        ]);
    }
}
