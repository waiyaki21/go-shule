<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SchoolType extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
    ];

    public function schools() : HasMany {
        return $this->hasMany(School::class);
    }
}
