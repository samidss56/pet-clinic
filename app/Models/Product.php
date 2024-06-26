<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'product_id';
    public $incrementing = false;
    protected $guarded = [];

    public function carts()
    {
        return $this->hasMany(Cart::class, 'product_id', 'product_id');
    }
}
