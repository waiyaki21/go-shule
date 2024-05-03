<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventPhotos extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'filename',
        'filename_path',
    ];

    public function event(): BelongsTo
    {
        return $this->BelongsTo(SchoolEvent::class, 'event_id');
    }
}
