<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FormDetailsController;
use App\Http\Controllers\SchoolBlogsController;
use App\Http\Controllers\SchoolEventController;
use App\Http\Controllers\SchoolPhotosController;
use App\Http\Controllers\TestimonialsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// School Home Routes 
Route::controller(HomeController::class)->group(function () {
    // Welcome page 
    Route::get('/', 'index')->name('Welcome Go Shule');
    // Admin Dashboard
    Route::get('/dashboard', 'dashboard')->middleware(['auth', 'verified'])->name('Admin Dashboard');
});

// Profile 
Route::middleware('auth')->group(function () {
    // get 
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // update 
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // delete 
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// School Form Routes 
Route::controller(FormDetailsController::class)->middleware('auth')->group(function () {
    // post a ward 
    Route::post('/ward/{subcounty}', 'storeWard');

    // add Info 
    Route::get('/info', 'addInfo');
});

// School Routes 
Route::controller(SchoolController::class)->middleware('auth')->group(function () {
    // post
    Route::post('/school', 'store');

    // show school
    Route::get('/view_school/{school}', 'show')->name('View School');

    // update school
    Route::patch('/update/school/{school}', 'update');

    // post languages
    Route::post('/add/language/{school}', 'storeLanguage');

    // School Dashboard
    Route::get('/school/dashboard', 'dashboard')->middleware(['auth', 'verified'])->name('School Dashboard');
});

// School Events Routes 
Route::controller(SchoolEventController::class)->middleware('auth')->group(function () {
    // post an event
    Route::post('/event/{school}', 'store');

    // show event
    Route::get('/event/{schoolEvent}', 'show')->name('View School Event');

    // delete event
    Route::get('/delete/event/{schoolEvent}', 'destroy');
});

// School Blog Routes 
Route::controller(SchoolBlogsController::class)->middleware('auth')->group(function () {
    // post blog
    Route::post('/blog/{school}', 'store');

    // show event
    Route::get('/blog/{schoolBlogs}', 'show')->name('View School Blog');
});

// School Photos Routes 
Route::controller(SchoolPhotosController::class)->middleware('auth')->group(function () {
    // post photo
    Route::post('/photo/{school}', 'store');

    // view photo
    Route::get('/photo/{schoolPhotos}', 'show');

    // update photo
    Route::patch('/update/photo/{schoolPhotos}', 'update');

    // delete photo
    Route::get('/delete/photo/{schoolPhotos}', 'destroy');

    // make & remove banner
    Route::get('/make_banner/photo/{schoolPhotos}', 'makeBanner');
    Route::get('/remove_banner/photo/{schoolPhotos}', 'removeBanner');
});

// School testimonial Routes 
Route::controller(TestimonialsController::class)->middleware('auth')->group(function () {
    // post testimonial
    Route::post('/testimonial/{user}', 'store');

    // update testimonial
    Route::patch('/update/testimonial/{testimonials}', 'update');

    // update approval status
    Route::get('/approve/testimonial/{testimonials}', 'ApprovalState');
    Route::get('/disapprove/testimonial/{testimonials}', 'ApprovalState');

    // delete testimonial
    Route::get('/delete/testimonial/{testimonials}', 'destroy');
});

require __DIR__.'/auth.php';
