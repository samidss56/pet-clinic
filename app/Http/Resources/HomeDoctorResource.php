<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class HomeDoctorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'docter_id' => $this->docter_id,
            'name' => $this->name,
            'email' => $this->email,
            'no_telp' => $this->no_telp,
            'alamat' => $this->alamat,
            'profile' => $this->profile ? Storage::url($this->profile) : 'https://fakeimg.pl/100x100/?text-Book&font-noto',
        ];
    }
}
