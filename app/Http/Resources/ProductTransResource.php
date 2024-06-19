<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductTransResource extends JsonResource
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
            'invoice' => $this->invoice,
            'date_transaction' => $this->date_transaction,
            'subtotal' => $this->subtotal,
            'cart_ids' => $this->cart_ids,
            'payment_type' => $this->payment_type,
            'status_payment' => $this->status_payment,
            'user' => [
                'user_id' => $this->user->user_id ?? null,
                'name' => $this->user->name ?? null,
                'alamat' => $this->user->alamat ?? null,
                'email' => $this->user->email ?? null,
                'phone' => $this->user->phone ?? null,
            ],
            'details' => $this->details->map(function ($detail) {
                $product = $detail->product;
                return [
                    'transaction_id' => $detail->transaction_id,
                    'product_id' => $detail->product_id,
                    'product_name' => $product->name_product ?? null,
                    'product_image' => $product->image_product ?? null,
                    'quantity' => $detail->quantity,
                    'harga_product' => $detail->harga_product,
                ];
            })->toArray(),
        ];
    }
}
