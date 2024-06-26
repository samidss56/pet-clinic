<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JadwalResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        $days = [
            'senin' => 'SENIN',
            'selasa' => 'SELASA',
            'rabu' => 'RABU',
            'kamis' => 'KAMIS',
            'jumat' => 'JUMAT',
            'sabtu' => 'SABTU',
            'minggu' => 'MINGGU'
        ];

        return [
            'id' => $this->id,
            'schedule' => $this->schedule,
            'day' => $days[$this->day] ?? '',
            'is_aktif' => $this->is_aktif,
            'docter' => [
                'docter_id' => $this->docter->docter_id,
                'name' => $this->docter->name,
            ],
        ];
    }
}
