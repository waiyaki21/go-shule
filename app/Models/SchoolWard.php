<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SchoolWard extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'subcounty_id'
    ];

    public function subcounty(): BelongsTo
    {
        return $this->belongsTo(SchoolSubCounty::class);
    }

    public function schools(): HasMany
    {
        return $this->HasMany(School::class);
    }
}
