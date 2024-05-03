<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SchoolSubCounty extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'county_id'
    ];

    public function schools(): BelongsTo
    {
        return $this->belongsTo(SchoolCounty::class);
    }
}
