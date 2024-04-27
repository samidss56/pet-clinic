<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public function appointment()
    {
        return $this->belongsTo(Appointment::class, "appointment_id");
    }
}
