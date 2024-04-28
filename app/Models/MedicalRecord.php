<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    protected $fillable = [
        'appointment_id',
        'notes',
        'weight',
        'temperature',
        'advice',
        'prescription',
        'dose',
    ];
    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'appointment_id');
    }

    public function pet()
    {
        return $this->appointment->pet;
    }

    public function doctor()
    {
        return $this->appointment->doctor;
    }
}
