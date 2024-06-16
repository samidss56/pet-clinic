<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'price' => $price = $this->price,
            'price_tax' => (int) round((11/100) * $price, 0) + $price,
            'qty' =>$this->qty,
            'product' => [
                'product_id' => $this->product->product_id,
                'name_product' => $this->product->name_product,
                'slug' => $this->product->slug,
                'image_product' => $this->product->image_product ? Storage::url($this->product->image_product) : 'https://fakeimg.pl/200x300/?text-Book&font-noto',
            ],
            'user' => [
                'user_id' => $this->user->user_id,
                'name' => $this->user->name,
                'no_telp' => $this->user->no_telp,
                'alamat' => $this->user->alamat,
            ]
        ];
    }
}
