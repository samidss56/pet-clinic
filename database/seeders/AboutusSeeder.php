<?php

namespace Database\Seeders;

use App\Models\Aboutus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aboutus_id = 'ABT-' . date('ymdhis');

        Aboutus::create([
            'aboutus_id' => $aboutus_id,
            'title' => 'About Us',
            'content' => '"Pawana" means breeze, and "Jiwa" means life. At PawanaJiwa, we offer refreshing, comprehensive care to ensure your pets live healthy, vibrant lives, Our experienced team is dedicated to compassionate and holistic pet care.',
        ]);
    }
}
