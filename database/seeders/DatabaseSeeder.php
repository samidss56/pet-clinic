<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Aboutus;
use App\Models\Herosection;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            AboutusSeeder::class,
            HerosectionSeeder::class,
            TestimonialSeeder::class,
            WhyUsSeeder::class,
            ServiceSeeder::class,
            ProductSeeder::class,
            DoctorSeeder::class,
        ]);

        // Product::factory(30)->create();
    }
}
