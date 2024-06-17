<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\Admin\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/notif/payment', [TransactionController::class, 'notif'])->name('notif.hit');
Route::post('/notif/payment-ecom', [InvoiceController::class, 'notifecom'])->name('notif.ecom');
Route::get('/invoice/show', [InvoiceController::class, 'show'])->name('invoice.show');