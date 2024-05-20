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
        Schema::create('appointmens', function (Blueprint $table) {
            $table->string('appointmen_id')->primary();
            $table->string('pet_id');
            $table->string('docter_id');
            $table->string('status')->default('pending');
            $table->date('date_appointmens');
            $table->time('jadwal');
            $table->longText('description')->nullable();
            $table->string('weight')->nullable();
            $table->string('temperature')->nullable();
            $table->text('advice')->nullable();
            $table->timestamps();
            $table->foreign('pet_id')->references('pet_id')->on('pets');
            $table->foreign('docter_id')->references('docter_id')->on('docters');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointmens');
    }
};
