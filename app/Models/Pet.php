<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    public function owner()
    {
        return $this->belongsTo(Owner::class, 'owner_id');
    }

    public function petType()
    {
        return $this->belongsTo(PetType::class, 'pet_type_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'pet_id');
    }
}
