<?php

use App\Http\Controllers\Products;
use App\Http\Controllers\Request\Api\Products\ProductsApiController;
use App\Http\Controllers\Cart;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::get('cart/create', [Cart::class, 'store'])
    ->name('cart.store');

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
