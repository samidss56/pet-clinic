<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionSuperAdminResource extends JsonResource
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
            'status_payment' => $this->status_payment,
            'user' => [
                'user_id' => $this->user->user_id ?? null,
                'name' => $this->user->name ?? null,
                'email' => $this->user->email ?? null,
                'phone' => $this->user->phone ?? null,
            ],
            'appointment' => [
                'appointment_id' => $this->appoitment->appointmen_id ?? null,
                'pet_id' => $this->appoitment->pet_id ?? null,
                'pet_name' => $this->appoitment->pet->name ?? null,
                'pet_age' => $this->appoitment->pet->age ?? null,
                'pet_gender' => $this->appoitment->pet->gender ?? null,
                'owner_id' => $this->appoitment->pet->user->user_id ?? null, 
                'owner_name' => $this->appoitment->pet->user->name ?? null,
                'owner_email' => $this->appoitment->pet->user->email ?? null,
                'owner_phone' => $this->appoitment->pet->user->phone ?? null,
                'doctor_id' => $this->appoitment->docter_id ?? null,
                'doctor_name' => $this->appoitment->docter->name ?? null,
                'doctor_phone' => $this->appoitment->docter->phone ?? null,
                'doctor_email' => $this->appoitment->docter->email ?? null,
                'status' => $this->appoitment->status ?? null,
                'jadwal' => $this->appoitment->jadwal ?? null,
                'description' => $this->appoitment->description ?? null,
                'date_appointments' => $this->appoitment->date_appointments ?? null,
            ],
            'details' => $this->details->map(function ($detail) {
                $productName = $detail->product ? $detail->product->name_product : null;
                $serviceName = $detail->service ? $detail->service->name_service : null;
                return [
                    'transaction_id' => $detail->transaction_id,
                    'product_name' => $productName,
                    'service_name' => $serviceName,
                    'product_id' => $detail->product_id,
                    'service_id' => $detail->service_id,
                    'quantity' => $detail->quantity,
                    'harga_product' => $detail->harga_product,
                    'harga_service' => $detail->harga_service,
                ];
            })->toArray(),
        ];
    }
}
