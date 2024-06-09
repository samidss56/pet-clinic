<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonial_id = 'TST-' . date('ymdhis');

        Testimonial::create([
            'testimonial_id' => $testimonial_id,
            'name' => 'Mr. Owner',
            'content' => 'Saya sangat puas dengan pelayanan dari Pawana Jiwa',
            'status' => 'pending',
        ]);
    }
}
