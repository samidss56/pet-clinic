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
                'user_id' => $this->user->user_id,
                'name' => $this->user->name,
                'email' => $this->user->email,
                'phone' => $this->user->phone,
            ],
            'appointment' => [
                'appointment_id' => $this->appoitment->appointmen_id,
                'pet_id' => $this->appoitment->pet_id,
                'pet_name' => $this->appoitment->pet->name,
                'pet_age' => $this->appoitment->pet->age,
                'pet_gender' => $this->appoitment->pet->gender,
                'owner_id' => $this->appoitment->pet->user->user_id,
                'owner_name' => $this->appoitment->pet->user->name,
                'owner_email' => $this->appoitment->pet->user->email,
                'owner_phone' => $this->appoitment->pet->user->phone,
                'doctor_id' => $this->appoitment->docter_id,
                'doctor_name' => $this->appoitment->docter->name,
                'doctor_phone' => $this->appoitment->docter->phone,
                'doctor_email' => $this->appoitment->docter->email,
                'status' => $this->appoitment->status,
                'jadwal' => $this->appoitment->jadwal,
                'description' => $this->appoitment->description,
                'date_appointments' => $this->appoitment->date_appointments,
            ],
            'details' => $this->details->map(function ($detail) {
                return [
                    'transaction_id' => $detail->transaction_id,
                    'product_name' => $detail->product_name,
                    'service_name' => $detail->service_name,
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
