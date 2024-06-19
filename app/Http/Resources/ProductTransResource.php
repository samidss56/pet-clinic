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
        $subtotal = 0;
        $details = [];
        foreach($this->details as $detail){
            $product = $detail->product;
            $subtotal += $detail->quantity *  $detail->harga_product;
            $details[] = [
                'transaction_id' => $detail->transaction_id,
                'product_id' => $detail->product_id,
                'product_name' => $product->name_product ?? null,
                'product_image' => $product->image_product ?? null,
                'quantity' => $detail->quantity,
                'harga_product' => $detail->harga_product,
            ];
        }
        return [
            'id' => $this->id,
            'invoice' => $this->invoice,
            'date_transaction' => $this->date_transaction,
            'subtotal' => $total = $this->subtotal,
            'ppn_tax' => $ppn = (int) round((11/100) * $subtotal, 0),
            'onkir' => $total - ($subtotal + $ppn),
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
            'details' => $details,
        ];
    }
}
