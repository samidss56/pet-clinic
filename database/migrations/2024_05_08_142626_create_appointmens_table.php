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
            $table->foreignId('pets_id');
            $table->string('docter_id');
            $table->string('status')->default('pending');
            $table->longText('description')->nullable();
            $table->date('date_appointmens');
            $table->string('weight')->nullable();
            $table->string('temperature')->nullable();
            $table->text('advice')->nullable();
            $table->timestamps();
            $table->foreign('docter_id')->references('docter_id')->on('docters')->onDelete('cascade');
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
