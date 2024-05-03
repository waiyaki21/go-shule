<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolLevel extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
    ];

    public function schools(): HasMany
    {
        return $this->hasMany(School::class);
    }
}
