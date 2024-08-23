<?php

use App\Http\Controllers\Products;
use App\Http\Controllers\Wishlist;
use Illuminate\Support\Facades\Route;

Route::get('/', [Products::class, 'index']);

Route::get('wishlist', [Wishlist::class, 'show'])
    ->name('wishlist');

require __DIR__ . '/auth.php';
