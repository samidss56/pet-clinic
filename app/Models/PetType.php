<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetType extends Model
{
    public function pets()
    {
        return $this->hasMany(Pet::class, "pet_type_id");
    }
}
