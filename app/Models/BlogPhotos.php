<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogPhotos extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_id',
        'filename',
        'filename_path',
    ];

    public function blog(): BelongsTo
    {
        return $this->BelongsTo(SchoolBlogs::class, 'blog_id');
    }
}
