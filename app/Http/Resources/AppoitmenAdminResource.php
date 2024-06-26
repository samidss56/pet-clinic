<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppoitmenAdminResource extends JsonResource
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
                'user' => $this->pet->user,
            ],
            'docter' => [
                'docter_id' => $this->docter->docter_id,
                'name' => $this->docter->name,
                'email' => $this->docter->email,
                'profile' => $this->docter->profile,
                'jadwal' => [$tes],
            ],
           
        ];
    }
}
