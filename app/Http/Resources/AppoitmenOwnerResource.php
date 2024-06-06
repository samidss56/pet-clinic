<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppoitmenOwnerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $jadwal =  $this->jadwal ? substr($this->jadwal, 0, 5) : null;

        $tes = collect($this->docter->jadwal)->first( function ($abc) use ($jadwal) {
            return substr($abc['schedule'], 0, 5) === $jadwal;
        });
        
        return [
            'appointmen_id' => $this->appointmen_id,
            'pet_id' => $this->pet_id,
            'docter_id' => $this->docter_id,
            'status' => $this->status,
            'date_appointmens' => $this->date_appointmens,
            'jadwal' => $this->jadwal ? substr($this->jadwal, 0, 5) : null,
            'description' => $this->description,
            'weight' => $this->weight,
            'temperature' => $this->temperature,
            'advice' => $this->advice,
            'pet' => [
                'pet_id' => $this->pet->pet_id,
                'name' => $this->pet->name,
                'image' => $this->pet->image,
                'gender' => $this->pet->gender,
                'age' => $this->pet->age,
            ],
            'docter' => [
                'docter_id' => $this->docter->docter_id,
                'name' => $this->docter->name,
                'profile' => $this->docter->profile,
                'email' => $this->docter->email,
                'phone' => $this->docter->phone,
                'jadwal' => [$tes],
            ],
            'transaction' => $this->transaction ? [
                'appointmen_id' => $this->transaction->appointmen_id,
                'invoice' => $this->transaction->invoice,
                'date_transaction' => $this->transaction->date_transaction,
                'subtotal' => $this->transaction->subtotal,
                'status_payment' => $this->transaction->status_payment,
                'details' => $this->transaction->details->map(function ($detail) {
                    return [
                        'transaction_id' => $detail->transaction_id,
                        'product_id' => $detail->product_id,
                        'service_id' => $detail->service_id,
                        'quantity' => $detail->quantity,
                        'harga_product' => $detail->harga_product,
                        'harga_service' => $detail->harga_service,
                    ];
                })->toArray(),
            ] : null,
        ];
    }
}
