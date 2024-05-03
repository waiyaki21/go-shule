<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SchoolEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'school_id',
        'name',
        'date',
        'attendees',
        'number',
        'thumbnail',
        'thumbnail_path',
        'description'
    ];

    public function school(): BelongsTo
    {
        return $this->BelongsTo(School::class, 'school_id');
    }

    public function photos(): HasMany
    {
        return $this->HasMany(EventPhotos::class);
    }
}
