<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ZoningController;
use App\Http\Controllers\LogsController;
use App\Http\Controllers\BarangayCensusController;
use App\Http\Controllers\LandmarkController;
use App\Http\Controllers\RuleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('login', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {

    Route::prefix('dashboard/')->group(function(){
        Route::get('', [DashboardController::class, 'index'])->name('dashboard.index');
    });

    Route::prefix('users/')->group(function(){
        Route::get('', [UserController::class, 'index'])->name('users.index');
        Route::post('users-list', [UserController::class, 'list'])->name('users.list');
        Route::post('users-add', [UserController::class, 'add'])->name('users.add');
        Route::patch('/{id}', [UserController::class, 'update'])->name('users.update');
        Route::delete('{id}', [UserController::class, 'deleteUser'])->name('users.delete');
    });
    
    Route::prefix('profile/')->group(function(){
        Route::get('', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__.'/auth.php';
