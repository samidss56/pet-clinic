<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
            // 'product_id' => substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'), 0, 8),
            'name_product' => $name = str($this->faker->sentence(2))->title(),
            'slug' => str($name)->slug(),
            'deskripsi_product' => $this->faker->sentence(10),
            'weight' => $this->faker->randomFloat(2, 0.01, 1.99),
            'price_product' => rand(1000, 90000),
            'stock_product' => rand(10, 100),
        ];
    }
}
