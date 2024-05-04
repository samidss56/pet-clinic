<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\PetTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Doctor\DashboardController as DoctorDashboardController;
use App\Http\Controllers\Owner\DashboardController as OwnerDashboardController;
use App\Http\Controllers\Owner\PetController;
use App\Http\Controllers\ProfileController;
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

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified', 'owner'])->group(function () {
    Route::get('/dashboard', [OwnerDashboardController::class, 'index'])->name('owner.dashboard');

    Route::get('/owner/pets', [PetController::class, 'index'])->name('owner.pets');
    Route::get('/owner/pets/create-pet', [PetController::class, 'createPetPage'])->name('owner.pets.create');
    Route::post('/owner/pets/create', [PetController::class, 'store'])->name('owner.pets.store');
    Route::get('/owner/pets/update-pet/{pet}', [PetController::class, 'updatePetPage'])->name('owner.pets.edit');
    Route::patch('/owner/pets/update/{pet}', [PetController::class, 'update'])->name('owner.pets.update');
    Route::delete('/owner/pets/delete/{pet}', [PetController::class, 'destroy'])->name('owner.pets.destroy');
});

Route::middleware(['auth', 'verified', 'doctor'])->group(function () {
    Route::get('/doctor/dashboard', [DoctorDashboardController::class, 'index'])->name('doctor.dashboard');
});

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users');
    Route::get('/admin/users/create-user', [UserController::class, 'createUserPage'])->name('admin.users.create');
    Route::post('/admin/users/create', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/admin/users/update-user/{user}', [UserController::class, 'updateUserPage'])->name('admin.users.edit');
    Route::patch('/admin/users/update/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/admin/users/delete/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');

    Route::get('/admin/pet-types', [PetTypeController::class, 'index'])->name('admin.pet-types');
    Route::post('/admin/pet-types/create', [PetTypeController::class, 'store'])->name('admin.pet-types.store');
    Route::patch('/admin/pet-types/update/{petType}', [PetTypeController::class, 'update'])->name('admin.pet-types.update');
    Route::delete('/admin/pet-types/delete/{petType}', [PetTypeController::class, 'destroy'])->name('admin.pet-types.destroy');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
