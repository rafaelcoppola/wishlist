<?php

use App\Http\Controllers\Main;
use App\Http\Controllers\Wishlist;
use Illuminate\Support\Facades\Route;

Route::get('/', [Main::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::get('wishlist', [Wishlist::class, 'show'])
        ->name('wishlist');
});


require __DIR__ . '/auth.php';
