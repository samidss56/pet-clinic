<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class DocterResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'docter_id' => $this->docter_id,
            'name' => $this->name,
            'password' => $this->password,
            'email' => $this->email,
            'no_telp' => $this->no_telp,
            'alamat' => $this->alamat,
            'profile' => $this->profile ? Storage::url($this->profile) : 'https://fakeimg.pl/100x100/?text-Book&font-noto',
        ];
    }
}
