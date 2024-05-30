<?php

namespace Database\Seeders;

use App\Models\Herosection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HerosectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $herosection_id = 'HRS-' . date('ymdhis');

        Herosection::create([
            'herosection_id' => $herosection_id,
            'title' => 'Your Pets Health is Our Priority',
            'content' => 'Committed to providing the highest quality care for your pets.',
        ]);
    }
}
