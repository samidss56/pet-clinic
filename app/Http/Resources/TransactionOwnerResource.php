<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionOwnerResource extends JsonResource
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
            'status_payment' => $this->status_payment,
            'details' => $this->details->map(function ($detail) {
                return [
                    'transaction_id' => $detail->transaction_id,
                    'product_id' => $detail->product_id,
                    'name_product' => $detail->product->name_product ?? null,
                    'name_service' => $detail->service->name_service ?? null,
                    'service_id' => $detail->service_id,
                    'quantity' => $detail->quantity,
                    'harga_product' => $detail->harga_product,
                    'harga_service' => $detail->harga_service,
                ];
            })->toArray(),
        ];
    }
}
