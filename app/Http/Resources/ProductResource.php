<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'product_id' => $this->product_id,
            'name_product' => $this->name_product,
            'slug' => $this->slug,
            'deskripsi_product' => $this->deskripsi_product,
            'price_product' => $this->price_product,
            'image_product' => isset($this->product) && !is_null($this->product->image_product) ? Storage::url($this->product->image_product) : 'https://fakeimg.pl/200x300/?text-Book&font-noto',
            'stock_product' => $this->stock_product,
        ];
    }
}
