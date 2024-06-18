<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specificProducts = [
            [
                'name_product' => 'Litter Box Deodorizer',
                'deskripsi_product' => 'Penghilang bau pasir kucing. Menjaga kotak pasir kucing tetap segar dan bebas bau.',
                'price_product' => 50000,
                'stock_product' => 30,
                'weight' => 500,
            ],
            [
                'name_product' => 'Puppy Starter Milk',
                'deskripsi_product' => 'Susu formula untuk anak anjing. Memenuhi kebutuhan nutrisi anak anjing yang sedang dalam masa pertumbuhan.',
                'price_product' => 100000,
                'stock_product' => 40,
                'weight' => 200,
            ],
            [
                'name_product' => 'Whiskas Complete Wet Cat Food Pouch Salmon',
                'deskripsi_product' => 'Makanan basah untuk kucing dengan rasa salmon. Kaya akan protein dan vitamin untuk kesehatan kucing secara keseluruhan.',
                'price_product' => 10000,
                'stock_product' => 50,
                'weight' => 85,
            ],
            [
                'name_product' => 'Hills Science Diet Adult Sensitive Stomach and Skin Dry Dog Food',
                'deskripsi_product' => 'Makanan kering untuk anjing dewasa dengan pencernaan sensitif dan alergi kulit. Membantu meredakan gejala pencernaan dan alergi.',
                'price_product' => 400000,
                'stock_product' => 60,
                'weight' => 3000,
            ],
            [
                'name_product' => 'Royal Canin Feline Hairball Care Dry Cat Food',
                'deskripsi_product' => 'Makanan kering untuk kucing yang rentan terhadap hairball. Membantu mencegah pembentukan hairball dan melancarkan pencernaan.',
                'price_product' => 350000,
                'stock_product' => 70,
                'weight' => 1000,
            ],
            [
                'name_product' => 'Pro Plan Veterinary Diets OM Intestinal Formula Dry Cat Food',
                'deskripsi_product' => 'Makanan kering khusus untuk kucing dengan masalah pencernaan. Membantu melancarkan pencernaan dan penyerapan nutrisi.',
                'price_product' => 300000,
                'stock_product' => 80,
                'weight' => 2000,
            ]
        ];

        foreach ($specificProducts as $productData) {
            $product_id = 'PRD-' . date('ymdhis') . '-' . Str::random(5);


            Product::create([
                'product_id' => $product_id,
                'name_product' => $productData['name_product'],
                'slug' => Str::slug($productData['name_product']),
                'deskripsi_product' => $productData['deskripsi_product'],
                'price_product' => $productData['price_product'],
                'stock_product' => $productData['stock_product'],
                'weight' => $productData['weight'],
            ]);
        }
    }
}
