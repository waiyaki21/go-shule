<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolCounty extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'county_name'
    ];

    public function schools(): HasMany
    {
        return $this->hasMany(School::class);
    }
}
