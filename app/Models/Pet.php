<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $primaryKey = 'pet_id';
    public $incrementing = false;
    protected $guarded = [];

    public function appoitmen()
    {
        return $this->belongsToMany(Appointmen::class, 'pet_id', 'pet_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
