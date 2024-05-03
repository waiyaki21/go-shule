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
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('admin_id')->default(1);
            $table->string('name');
            $table->string('short_name');
            $table->string('type_id');
            $table->string('level_id');
            $table->string('system_id');
            $table->string('county_id');
            $table->string('subcounty_id');
            $table->string('ward_id');
            $table->string('phone_number');
            $table->string('email');
            $table->string('website');
            $table->string('fee_range')->nullable();
            $table->string('classes')->nullable();
            $table->string('pupils')->nullable();
            $table->string('established')->nullable();
            $table->boolean('transport')->default(0);
            $table->boolean('lunch')->default(0);
            $table->boolean('trips')->default(0);
            $table->boolean('computer')->default(0);
            $table->boolean('swimming')->default(0);
            $table->boolean('foreign')->default(0);
            $table->string('times')->nullable();
            $table->text('bio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};
