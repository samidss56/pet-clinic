<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhyUs extends Model
{
    use HasFactory;
    protected $table = 'why_us';
    protected $primaryKey = 'whyus_id';
    public $incrementing = false;
    protected $guarded = [];
    protected $casts = [
        'list_items' => 'array',
    ];
}
