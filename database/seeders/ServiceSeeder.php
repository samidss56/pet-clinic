<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specificServices = [
            [
                'name_service' => 'Pet Consultation',
                'price_service' => 50000,
                'image_service' => 'service_' . Str::random(15),
            ],
            [
                'name_service' => 'Vaccination',
                'price_service' => 200000,
                'image_service' => 'service_' . Str::random(15),
            ],
            [
                'name_service' => 'Animal Examination',
                'price_service' => 100000,
                'image_service' => 'service_' . Str::random(15),
            ],
            [
                'name_service' => 'Pet Boarding',
                'price_service' => 50000,
                'image_service' => 'service_' . Str::random(15),
            ],
            [
                'name_service' => 'Pet Grooming',
                'price_service' => 300000,
                'image_service' => 'service_' . Str::random(15),
            ],
            [
                'name_service' => 'Animal Therapy',
                'price_service' => 500000,
                'image_service' => 'service_' . Str::random(15),
            ]
        ];

        foreach ($specificServices as $serviceData) {
            $service_id = 'SRV-' . date('ymdhis') . '-' . Str::random(5);


            Service::create([
                'service_id' => $service_id,
                'name_service' => $serviceData['name_service'],
                'price_service' => $serviceData['price_service'],
                'image_service' => $serviceData['image_service'],
            ]);
        }
    }
}
