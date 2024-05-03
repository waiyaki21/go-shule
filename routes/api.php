<?php

use App\Http\Controllers\ApiSchoolController;
use App\Http\Controllers\FormDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::controller(FormDetailsController::class)->group(function () {
    // get all info 
    Route::get('/forminfo', 'getInfo');

    // get sub county info 
    Route::get('/subcounty/{county}', 'getSubInfo');

    // get wards info 
    Route::get('/wards/{subcounty}', 'getWardsInfo');
});

Route::controller(ApiSchoolController::class)->group(function () {
    // get all info 
    Route::get('/getSchools', 'getInfo');
});
