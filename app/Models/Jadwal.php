<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function docter()
    {
        return $this->belongsTo(Docter::class, 'docter_id', 'docter_id');
    }
}
