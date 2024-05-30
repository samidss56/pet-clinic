<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Herosection extends Model
{
    use HasFactory;

    protected $table = 'herosection';

    protected $primaryKey = 'herosection_id';
    public $incrementing = false;
    protected $guarded = [];
}
