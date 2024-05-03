<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SchoolPhotos extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'school_id',
        'banner',
        'banner_name',
        'banner_path',
        'main_banner',
        'carousel_banners',
        'description'
    ];

    public function school(): BelongsTo
    {
        return $this->BelongsTo(School::class, 'school_id');
    }
}
