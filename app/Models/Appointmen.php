<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointmen extends Model
{
    use HasFactory;

    protected $primaryKey = 'appointmen_id';
    public $incrementing = false;
    protected $guarded = [];

    public function docter()
    {
        return $this->belongsTo(Docter::class, 'docter_id', 'docter_id');
    }

    public function pet()
    {
        return $this->belongsTo(Pet::class, 'pet_id', 'pet_id');
    }

    public function transaction()
    {
        return $this->hasOne(Transaction::class, 'appointmen_id', 'appointmen_id');
    }
}
