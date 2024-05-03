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
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->foreignId("pet_type_id")->constrained("pet_types")->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId("owner_id")->constrained("users")->onUpdate('cascade')->onDelete('cascade');
            $table->string("name");
            $table->string("image")->nullable();
            $table->integer("age");
            $table->string("gender");
            $table->string("color");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
