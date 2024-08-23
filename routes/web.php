<?php

use App\Http\Controllers\Products;
use App\Http\Controllers\Request\Api\Products\ProductsApiController;
use App\Http\Controllers\Wishlist;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::get('wishlist', [Wishlist::class, 'show'])
    ->name('wishlist');

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
