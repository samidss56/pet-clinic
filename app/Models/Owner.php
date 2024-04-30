<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $fillable = [
        'owner_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pets()
    {
        return $this->hasMany(Pet::class, 'owner_id');
    }
}