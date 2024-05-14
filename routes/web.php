<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\PetController as AdminPetController;
use App\Http\Controllers\Admin\PetTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;
use App\Http\Controllers\Docter\DashboardController as DocterDashboardController;
use App\Http\Controllers\Doctor\DashboardController as DoctorDashboardController;
use App\Http\Controllers\Owner\DashboardController as OwnerDashboardController;
use App\Http\Controllers\Owner\PetController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SuperAdmin\AppointmenController;
use App\Http\Controllers\SuperAdmin\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// auth()->loginUsingId('USR-240513023346');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('superadmin')->namespace('Superadmin')->middleware('hasSuperAdmin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('superadmin.dashboard');

    Route::get('/appointments', [AppointmenController::class, 'index'])->name('superadmin.appointments');
    Route::get('/appointments/detail', [AppointmenController::class, 'detail'])->name('superadmin.appointments.detail');
});

Route::prefix('admin')->namespace('Admin')->middleware('hasAdmin')->group(function () {

    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/users', [UserController::class, 'index'])->name('admin.users');
    Route::get('/users/create-user', [UserController::class, 'createUserPage'])->name('admin.users.create');
    Route::post('/users/create', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/users/update-user/{user}', [UserController::class, 'updateUserPage'])->name('admin.users.edit');
    Route::patch('/users/update/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/users/delete/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');
    Route::get('/pets', [AdminPetController::class, 'index'])->name('admin.pets');

    // Route untuk Halaman Admin Product
    Route::get('/products', [AdminProductController::class, 'index'])->name('admin.products');
    Route::get('/products/create-product', [AdminProductController::class, 'createProductPage'])->name('admin.products.create');
    Route::post('/products/create', [AdminProductController::class, 'store'])->name('admin.products.store');
    Route::get('/products/update-product/{product}', [AdminProductController::class, 'updateProductPage'])->name('admin.products.edit');
    Route::post('/products/update/{product}', [AdminProductController::class, 'update'])->name('admin.products.update');
    Route::delete('/products/delete/{product}', [AdminProductController::class, 'destroy'])->name('admin.products.destroy');

    // Route untuk Halaman Admin Service
    Route::get('/services', [AdminServiceController::class, 'index'])->name('admin.services');
    Route::get('/services/create-service', [AdminServiceController::class, 'createServicePage'])->name('admin.services.create');
    Route::post('/services/create', [AdminServiceController::class, 'store'])->name('admin.services.store');
    Route::get('/services/update-service/{service}', [AdminServiceController::class, 'updateServicePage'])->name('admin.services.edit');
    Route::put('/services/update/{service}', [AdminServiceController::class, 'update'])->name('admin.services.update');
    Route::delete('/services/delete/{service}', [AdminServiceController::class, 'destroy'])->name('admin.services.destroy');
});

Route::prefix('owner')->namespace('Owner')->group(function () {
    Route::get('/dashboard', [OwnerDashboardController::class, 'index'])->name('owner.dashboard');

    Route::get('/pets', [PetController::class, 'index'])->name('owner.pets');
    Route::get('/pets/create-pet', [PetController::class, 'createPetPage'])->name('owner.pets.create');
    Route::post('/pets/create', [PetController::class, 'store'])->name('owner.pets.store');
    Route::get('/pets/update-pet/{pet}', [PetController::class, 'updatePetPage'])->name('owner.pets.edit');
    Route::post('/pets/update/{pet}', [PetController::class, 'update'])->name('owner.pets.update');
    Route::delete('/pets/delete/{pet}', [PetController::class, 'destroy'])->name('owner.pets.destroy');
});

Route::prefix('doctor')->namespace('Doctor')->group(function () {
    Route::get('/dashboard', [DocterDashboardController::class, 'index'])->name('doctor.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
