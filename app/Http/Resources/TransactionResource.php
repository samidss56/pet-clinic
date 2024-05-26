<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'qr_code' => $this->payment_type != '"bank_transfer"' ? $this['payment_info']['qr_code'] : null,
            'bank' => $this->payment_type == '"bank_transfer"' ? [
                'bank' => $this->payment_info['bank']['bank'],
                'va_number' => $this->payment_info['bank']['va_number'],
            ] : null,

        ];
    }
}
