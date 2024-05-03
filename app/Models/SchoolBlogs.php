<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SchoolBlogs extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'school_id',
        'admin_id',
        'blog_title',
        'blog_body',
        'read',
        'views',
        'thumbnail',
        'thumbnail_path',
    ];


    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class, 'user_id');
    }

    public function schools(): BelongsTo
    {
        return $this->BelongsTo(School::class, 'school_id');
    }

    public function photos(): HasMany
    {
        return $this->HasMany(BlogPhotos::class);
    }
}
