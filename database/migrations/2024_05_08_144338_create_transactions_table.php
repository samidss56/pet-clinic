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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('invoice')->unique();
            $table->string('user_id')->nullable();
            $table->string('appointmen_id')->nullable();
            $table->string('status_payment');
            $table->date('date_transaction');
            $table->double('subtotal');
            $table->json('cart_ids')->nullable();
            $table->json('payment_info')->nullable();
            $table->json('payment_type')->nullable();
            $table->dateTime('succeeded_at')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('appointmen_id')->references('appointmen_id')->on('appointmens');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
