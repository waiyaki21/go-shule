<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'admin_id',
        'name',
        'short_name',
        'type_id',
        'level_id',
        'system_id',
        'county_id',
        'subcounty_id',
        'ward_id',
        'phone_number',
        'email',
        'website',
        'fee_range',
        'classes',
        'pupils',
        'established',
        'transport',
        'lunch',
        'trips',
        'computer',
        'swimming',
        'foreign',
        'times',
        'bio',
    ];

    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);  
    }

    public function type(): BelongsTo 
    {
        return $this->belongsTo(SchoolType::class, 'type_id');
    }

    public function level(): BelongsTo
    {
        return $this->belongsTo(SchoolLevel::class, 'level_id');
    }

    public function system(): BelongsTo
    {
        return $this->belongsTo(SchoolEducationSystem::class, 'system_id');
    }

    public function county(): BelongsTo
    {
        return $this->belongsTo(SchoolCounty::class, 'county_id');
    }

    public function subcounty(): BelongsTo
    {
        return $this->belongsTo(SchoolSubCounty::class, 'subcounty_id');
    }

    public function ward(): BelongsTo
    {
        return $this->belongsTo(SchoolWard::class, 'ward_id');
    }

    public function events(): HasMany
    {
        return $this->HasMany(SchoolEvent::class);
    }

    public function latestEvents(): HasMany
    {
        return $this->HasMany(SchoolEvent::class)->orderBy('created_at', 'desc')->take(3);
    }

    public function blogs(): HasMany
    {
        return $this->HasMany(SchoolBlogs::class);
    }

    public function latestBlogs(): HasMany
    {
        return $this->HasMany(SchoolBlogs::class)->orderBy('created_at', 'desc')->take(3);
    }

    public function photos(): HasMany
    {
        return $this->HasMany(SchoolPhotos::class);
    }

    public function bannerPhoto(): hasOne
    {
        return $this->hasOne(SchoolPhotos::class)->where('main_banner', 1)->orderBy('created_at', 'desc');
    }

    public function testimonials(): HasMany
    {
        return $this->HasMany(Testimonials::class);
    }

    public function languages(): HasMany
    {
        return $this->HasMany(Languages::class);
    }
}
