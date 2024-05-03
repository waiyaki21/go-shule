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
        Schema::create('school_blogs', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('school_id');
            $table->string('admin_id');
            $table->string('blog_title');
            $table->text('blog_body');
            $table->integer('views')->default(0);
            $table->integer('read')->default(0);
            $table->string('thumbnail');
            $table->string('thumbnail_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_blogs');
    }
};
