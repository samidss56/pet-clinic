<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Docter extends Authenticatable
{
    use HasFactory;

    protected $primaryKey = 'docter_id';
    public $incrementing = false;
    protected $guarded = [];

    public function jadwal()
    {
        return $this->hasMany(Jadwal::class, 'docter_id', 'docter_id');
    }
}
