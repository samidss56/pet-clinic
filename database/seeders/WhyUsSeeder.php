<?php

namespace Database\Seeders;

use App\Models\WhyUs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WhyUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $whyus_id = 'WUS-' . date('ymdhis');

        WhyUs::create([
            'whyus_id' => $whyus_id,
            'image' => 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'title' => 'Why Choose Us?',
            'description' => 'Easy and affordable pet care service in your nearest location.',
            'list_items' => [
                '10+ Years of Experience',
                '100% Customer Satisfaction',
                '24/7 Support',
                'Proper care for your pets',
            ]
        ]);
    }
}
