<?php

use App\Http\Controllers\Admin\AboutusController;
use App\Http\Controllers\Admin\AppointmenController as AdminAppointmenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\PetController as AdminPetController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;
use App\Http\Controllers\Admin\ArticleController as AdminArticleController;
use App\Http\Controllers\Admin\HerosectionController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\TestimonialController as AdminTestimonialController;
use App\Http\Controllers\Admin\GalleryController as AdminGalleryController;
use App\Http\Controllers\Admin\ProductTransController;
use App\Http\Controllers\Admin\WhyUsController;
use App\Http\Controllers\Auth\DocterPasswordController;
use App\Http\Controllers\Docter\AppoinmenController;
use App\Http\Controllers\Docter\DashboardController as DocterDashboardController;
use App\Http\Controllers\Docter\ProfileController as DocterProfileController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Owner\AppointmenController as OwnerAppointmenController;
use App\Http\Controllers\Owner\DashboardController as OwnerDashboardController;
use App\Http\Controllers\Owner\PetController;
use App\Http\Controllers\Owner\ProfileController;
use App\Http\Controllers\Owner\TestimonialController as OwnerTestimonialController;
use App\Http\Controllers\Owner\ProductsController as OwnerProductsController;
use App\Http\Controllers\Owner\CartController as OwnerCartController;
use App\Http\Controllers\Owner\TransactionController as OwnerTransactionController;
use App\Http\Controllers\SuperAdmin\AppointmenController;
use App\Http\Controllers\SuperAdmin\ArticleController;
use App\Http\Controllers\SuperAdmin\DashboardController;
use App\Http\Controllers\SuperAdmin\DocterController;
use App\Http\Controllers\SuperAdmin\JadwalController;
use App\Http\Controllers\Superadmin\UserController as SuperadminUserController;
use App\Http\Controllers\Superadmin\ProductController as SuperadminProductController;
use App\Http\Controllers\Superadmin\ServiceController as SuperadminServiceController;
use App\Http\Controllers\Superadmin\TransactionController as SuperadminTransactionController;
use App\Http\Controllers\Superadmin\ProductTransController as SuperadminProductTransController;
use App\Http\Controllers\Home\ArticleController as HomeArticleController;
use App\Http\Controllers\Home\DoctorController as HomeDoctorController;
use App\Http\Controllers\InvoiceController;
use App\Models\Aboutus;
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


// auth()->loginUsingId(3);

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/articles', [HomeArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{slug}', [HomeArticleController::class, 'show'])->name('articles.show');

Route::get('/doctors', [HomeDoctorController::class, 'index'])->name('doctors.index');

Route::get('/login/docter', [LoginController::class, 'login']);
Route::post('/login/docter', [LoginController::class, 'login_post'])->name('login.docter');
Route::post('/logout/docter', [LoginController::class, 'logout'])->name('logout.docter');

Route::get('/doctor-schedule/{docter_id}', [OwnerAppointmenController::class, 'getJadwal']);

Route::prefix('superadmin')->namespace('Superadmin')->middleware('hasSuperAdmin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('superadmin.dashboard');

    Route::get('/users', [SuperadminUserController::class, 'index'])->name('superadmin.users');
    Route::get('/users/create-user', [SuperadminUserController::class, 'create'])->name('superadmin.users.create');
    Route::post('/users/create', [SuperadminUserController::class, 'store'])->name('superadmin.users.store');
    Route::get('/users/update-user/{user}', [SuperadminUserController::class, 'edit'])->name('superadmin.users.edit');
    Route::patch('/users/update/{user}', [SuperadminUserController::class, 'update'])->name('superadmin.users.update');
    Route::delete('/users/delete/{user}', [SuperadminUserController::class, 'destroy'])->name('superadmin.users.destroy');

    Route::get('docters', [DocterController::class, 'index'])->name('superadmin.docters');
    Route::get('docters/create', [DocterController::class, 'create'])->name('superadmin.docters.create');
    Route::post('docters/store', [DocterController::class, 'store']);
    Route::get('docters/edit/{docter:docter_id}', [DocterController::class, 'edit'])->name('superadmin.docters.edit');
    Route::post('docters/update/{docter:docter_id}', [DocterController::class, 'update']);
    Route::post('docters/delete/{docter:docter_id}', [DocterController::class, 'delete'])->name('superadmin.docters.delete');

    Route::get('jadwal', [JadwalController::class, 'index'])->name('superadmin.jadwal');
    Route::get('jadwal/edit/{jadwal:docter_id}', [JadwalController::class, 'edit'])->name('superadmin.jadwal.edit');
    Route::post('jadwal/update/{jadwal:docter_id}', [JadwalController::class, 'update']);

    Route::get('/appointments', [AppointmenController::class, 'index'])->name('superadmin.appointments');
    Route::get('/appointments/detail/{appointmen:appointmen_id}', [AppointmenController::class, 'detail'])->name('superadmin.appointments.detail');

    // Route untuk Halaman Super Admin Product
    Route::get('/products', [SuperadminProductController::class, 'index'])->name('superadmin.products');
    Route::get('/products/create-product', [SuperadminProductController::class, 'create'])->name('superadmin.products.create');
    Route::post('/products/create', [SuperadminProductController::class, 'store'])->name('superadmin.products.store');
    Route::get('/products/update-product/{product}', [SuperadminProductController::class, 'edit'])->name('superadmin.products.edit');
    Route::post('/products/update/{product}', [SuperadminProductController::class, 'update'])->name('superadmin.products.update');
    Route::delete('/products/delete/{product}', [SuperadminProductController::class, 'destroy'])->name('superadmin.products.destroy');

    // Route untuk Halaman Super Admin Service
    Route::get('/services', [SuperadminServiceController::class, 'index'])->name('superadmin.services');
    Route::get('/services/create-service', [SuperadminServiceController::class, 'create'])->name('superadmin.services.create');
    Route::post('/services/create', [SuperadminServiceController::class, 'store'])->name('superadmin.services.store');
    Route::get('/services/update-service/{service}', [SuperadminServiceController::class, 'edit'])->name('superadmin.services.edit');
    Route::post('/services/update/{service}', [SuperadminServiceController::class, 'update'])->name('superadmin.services.update');
    Route::delete('/services/delete/{service}', [SuperadminServiceController::class, 'destroy'])->name('superadmin.services.destroy');

    // Route untuk Halaman Super Admin Article
    Route::get('/articles', [ArticleController::class, 'index'])->name('superadmin.articles');

    //Transaction
    Route::get('/transaction', [SuperadminTransactionController::class, 'index'])->name('superadmin.transaction');
    Route::get('transaction/{transaction:invoice}', [SuperadminTransactionController::class, 'show'])->name('superadmin.transaction.show');
    Route::get('/download-laporan', [SuperadminTransactionController::class, 'downloadlaporan'])->name('downloadlaporansuperadmin');
    Route::get('/transaction/{transaction:invoice}/pdf', [SuperadminTransactionController::class, 'downloaddetailPDF'])->name('superadmin.transaction.downloadPDF');

    // Product Transaction
    Route::get('/product-transaction', [SuperadminProductTransController::class, 'index'])->name('superadmin.product-transaction');
    Route::get('/product-transaction/{transaction:invoice}', [SuperadminProductTransController::class, 'show'])->name('superadmin.product-transaction.show');
    Route::get('/product-transaction/report/pdf', [SuperadminProductTransController::class, 'downloadReport'])->name('superadmin.product-transaction.report');
    Route::get('/product-transaction/{transaction:invoice}/pdf', [SuperadminProductTransController::class, 'downloadDetailPDF'])->name('superadmin.product-transaction.downloadPDF');
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
    Route::get('/products/create-product', [AdminProductController::class, 'create'])->name('admin.products.create');
    Route::post('/products/create', [AdminProductController::class, 'store'])->name('admin.products.store');
    Route::get('/products/update-product/{product}', [AdminProductController::class, 'edit'])->name('admin.products.edit');
    Route::post('/products/update/{product}', [AdminProductController::class, 'update'])->name('admin.products.update');
    Route::delete('/products/delete/{product}', [AdminProductController::class, 'destroy'])->name('admin.products.destroy');

    // Route untuk Halaman Admin Service
    Route::get('/services', [AdminServiceController::class, 'index'])->name('admin.services');
    Route::get('/services/create-service', [AdminServiceController::class, 'create'])->name('admin.services.create');
    Route::post('/services/create', [AdminServiceController::class, 'store'])->name('admin.services.store');
    Route::get('/services/update-service/{service}', [AdminServiceController::class, 'edit'])->name('admin.services.edit');
    Route::post('/services/update/{service}', [AdminServiceController::class, 'update'])->name('admin.services.update');
    Route::delete('/services/delete/{service}', [AdminServiceController::class, 'destroy'])->name('admin.services.destroy');

    // Route untuk Halaman Admin Article
    Route::get('/articles', [AdminArticleController::class, 'index'])->name('admin.articles');
    Route::get('/articles/create-article', [AdminArticleController::class, 'create'])->name('admin.articles.create');
    Route::post('/articles/create', [AdminArticleController::class, 'store'])->name('admin.articles.store');
    Route::get('/articles/update-article/{article}', [AdminArticleController::class, 'edit'])->name('admin.articles.edit');
    Route::post('/articles/update/{article}', [AdminArticleController::class, 'update'])->name('admin.articles.update');
    Route::delete('/articles/delete/{article}', [AdminArticleController::class, 'destroy'])->name('admin.articles.destroy');

    // Appointment Transaction
    Route::get('/transaction', [TransactionController::class, 'index'])->name('admin.transaction');
    Route::get('/transaction/edit/{transaction:invoice}', [TransactionController::class, 'edit'])->name('admin.transaction.edit');
    Route::post('/transaction/updatetrans/{transaction:invoice}', [TransactionController::class, 'update'])->name('admin.transaction.update');
    Route::get('/transaction', [TransactionController::class, 'index'])->name('admin.transaction');
    Route::get('transaction/{transaction:invoice}', [TransactionController::class, 'show'])->name('transaction.show');

    // Product Transaction
    Route::get('/product-transaction', [ProductTransController::class, 'index'])->name('admin.product-transaction');
    Route::get('/product-transaction/{transaction:invoice}', [ProductTransController::class, 'show'])->name('admin.product-transaction.show');
    Route::get('/product-transaction/{transaction:invoice}/pdf', [ProductTransController::class, 'downloadDetailPDF'])->name('admin.product-transaction.downloadPDF');


    //Appoitment
    Route::get('/appoitments', [AdminAppointmenController::class, 'index'])->name('admin.appoitments');
    Route::get('/appoitments/detail/{appointmen:appointmen_id}', [AdminAppointmenController::class, 'detail'])->name('admin.appoitments.detail');

    // Route untuk Halaman Admin Herosection
    Route::get('/herosection', [HerosectionController::class, 'index'])->name('admin.herosection.index');
    Route::get('/herosection/edit', [HerosectionController::class, 'edit'])->name('admin.herosection.edit');
    Route::post('/herosection/update', [HerosectionController::class, 'update'])->name('admin.herosection.update');

    // Route untuk Halaman Admin Aboutus
    Route::get('/aboutus', [AboutusController::class, 'index'])->name('admin.aboutus.index');
    Route::get('/aboutus/edit', [AboutusController::class, 'edit'])->name('admin.aboutus.edit');
    Route::post('/aboutus/update', [AboutusController::class, 'update'])->name('admin.aboutus.update');

    // Route untuk Halaman Admin Why Us
    Route::get('/whyus', [WhyUsController::class, 'index'])->name('admin.whyus.index');
    Route::get('/whyus/edit', [WhyUsController::class, 'edit'])->name('admin.whyus.edit');
    Route::post('/whyus/update', [WhyUsController::class, 'update'])->name('admin.whyus.update');

    // Route untuk Halaman Admin Testimonial
    Route::get('/testimonials', [AdminTestimonialController::class, 'index'])->name('admin.testimonials');
    Route::get('/testimonials/update-testimonial/{testimonial}', [AdminTestimonialController::class, 'edit'])->name('admin.testimonials.edit');
    Route::post('/testimonials/update/{testimonial}', [AdminTestimonialController::class, 'update'])->name('admin.testimonials.update');
    Route::delete('/testimonials/delete/{testimonial}', [AdminTestimonialController::class, 'destroy'])->name('admin.testimonials.destroy');

    // Route untuk Halaman Admin Gallery
    Route::get('/galleries', [AdminGalleryController::class, 'index'])->name('admin.galleries');
    Route::get('/galleries/create-gallery', [AdminGalleryController::class, 'create'])->name('admin.galleries.create');
    Route::post('/galleries/create', [AdminGalleryController::class, 'store'])->name('admin.galleries.store');
    Route::get('/galleries/update-gallery/{gallery}', [AdminGalleryController::class, 'edit'])->name('admin.galleries.edit');
    Route::post('/galleries/update/{gallery}', [AdminGalleryController::class, 'update'])->name('admin.galleries.update');
    Route::delete('/galleries/delete/{gallery}', [AdminGalleryController::class, 'destroy'])->name('admin.galleries.destroy');
});

Route::prefix('owner')->namespace('Owner')->middleware('hasOwner')->group(function () {
    Route::get('/dashboard', [OwnerDashboardController::class, 'index'])->name('owner.dashboard');

    Route::get('/pets', [PetController::class, 'index'])->name('owner.pets');
    Route::get('/pets/create-pet', [PetController::class, 'create'])->name('owner.pets.create');
    Route::post('/pets/create', [PetController::class, 'store'])->name('owner.pets.store');
    Route::get('/pets/update-pet/{pet}', [PetController::class, 'edit'])->name('owner.pets.edit');
    Route::post('/pets/update/{pet}', [PetController::class, 'update'])->name('owner.pets.update');
    Route::delete('/pets/delete/{pet}', [PetController::class, 'destroy'])->name('owner.pets.destroy');

    Route::get('/appointmen', [OwnerAppointmenController::class, 'index'])->name('owner.appointmen');
    Route::get('/appointmen/create/{pet_id}', [OwnerAppointmenController::class, 'create'])->name('owner.appointmen.create');
    Route::post('/appointmen/store', [OwnerAppointmenController::class, 'store'])->name('owner.appointmen.store');
    Route::post('/appointmen/update/{appointmen:appointmen_id}', [OwnerAppointmenController::class, 'update'])->name('owner.appointmen.update');
    Route::get('/appointmen/detail/{appointmen:appointmen_id}', [OwnerAppointmenController::class, 'show'])->name('owner.appointmen.detail');
    Route::post('/check-schedule-availability', [OwnerAppointmenController::class, 'checkScheduleAvailability']);

    Route::get('/settings', [ProfileController::class, 'edit'])->name('owner.profile.edit');
    Route::patch('/settings', [ProfileController::class, 'update'])->name('owner.profile.update');
    Route::delete('/settings', [ProfileController::class, 'destroy'])->name('owner.profile.destroy');

    Route::get('/testimonials', [OwnerTestimonialController::class, 'index'])->name('owner.testimonials');
    Route::get('/testimonials/create-testimonial', [OwnerTestimonialController::class, 'create'])->name('owner.testimonials.create');
    Route::post('/testimonials/create', [OwnerTestimonialController::class, 'store'])->name('owner.testimonials.store');

    Route::get('/products', [OwnerProductsController::class, 'index'])->name('owner.products');
    Route::get('/products/show/{product:slug}', [OwnerProductsController::class, 'show'])->name('owner.products.show');

    Route::get('/cart', [OwnerCartController::class, 'index'])->name('owner.cart');
    Route::delete('/cart/delete/{cart}', [OwnerCartController::class, 'delete'])->name('owner.cart.delete');
    Route::put('/carts/{cart}', [OwnerCartController::class, 'updateqty'])->name('owner.cart.updateqty');
    Route::post('cart/add-to-cart/{product:slug}', [OwnerCartController::class, 'store'])->name('cart.store');

    Route::get('/transaction', [OwnerTransactionController::class, 'index'])->name('owner.transaction');
    Route::get('/transaction/{transaction:invoice}', [OwnerTransactionController::class, 'show'])->name('owner.transaction.show');
    Route::get('transaction/{transaction:invoice}/pdf', [OwnerTransactionController::class, 'downloaDdetailPDF'])->name('owner.transaction.downloadPDF');

    Route::post('onkir', [OwnerCartController::class, 'onkir'])->name('onkir');
    Route::get('/provinces', [OwnerCartController::class, 'getProvinces']);
    Route::get('/cities', [OwnerCartController::class, 'getCities']);
    Route::post('/invoice', [InvoiceController::class, 'store'])->name('invoice');
});

Route::prefix('docter')->namespace('Docter')->middleware('docter')->group(function () {
    Route::get('/dashboard', [DocterDashboardController::class, 'index'])->name('doctor.dashboard');


    Route::get('/jadwal', [\App\Http\Controllers\Docter\JadwalController::class, 'index'])->name('docter.jadwal');

    Route::get('/jadwal', [\App\Http\Controllers\Docter\JadwalController::class, 'index'])->name('docter.jadwal');
    Route::post('/jadwal/update/{jadwal}', [\App\Http\Controllers\Docter\JadwalController::class, 'update'])->name('docter.jadwal.update');

    Route::get('/appointmen', [AppoinmenController::class, 'index'])->name('docter.appointmen');
    Route::get('/appointmen/edit/{appointmen:appointmen_id}', [AppoinmenController::class, 'edit'])->name('docter.appointmen.edit');
    Route::post('/appointmen/update/{appointmen:appointmen_id}', [AppoinmenController::class, 'updatestatus'])->name('docter.appointmen.updatestatus');
    Route::post('/appointmen/updatetrans/{appointmen:appointmen_id}', [AppoinmenController::class, 'updatetrans'])->name('docter.appointmen.updatetrans');

    Route::get('/settings', [DocterProfileController::class, 'edit'])->name('docter.profile.edit');
    Route::patch('/settings/{docter}', [DocterProfileController::class, 'update'])->name('docter.profile.update');
    // Route::put('/settings', [DocterPasswordController::class, 'update'])->name('docter.password.update');
});

// Route::middleware('auth')->group(function () {
// });

require __DIR__ . '/auth.php';
