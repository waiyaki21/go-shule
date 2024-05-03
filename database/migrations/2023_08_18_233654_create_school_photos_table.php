<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('school_photos', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('school_id');
            $table->string('banner');
            $table->string('banner_name');
            $table->string('banner_path');
            $table->boolean('main_banner')->default(0);
            $table->boolean('carousel_banners')->default(0);
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_photos');
    }
};
