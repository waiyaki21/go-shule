<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Languages extends Model
{
    use HasFactory;

    protected $fillable = [
        'language_id',
        'school_id',
        'name'
    ];

    public function school(): BelongsTo
    {
        return $this->BelongsTo(School::class, 'school_id');
    }
}
