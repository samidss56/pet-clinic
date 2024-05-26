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
        Schema::create('transaction_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id');
            $table->string('product_id')->nullable();
            $table->string('service_id')->nullable();
            $table->integer('quantity')->nullable();
            $table->double('harga_product')->nullable();
            $table->double('harga_service')->nullable();
            $table->timestamps();
            $table->foreign('product_id')->references('product_id')->on('products');
            $table->foreign('service_id')->references('service_id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_details');
    }
};
