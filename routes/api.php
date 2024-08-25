<?php

use App\Http\Controllers\Request\Api\Products\ProductsApiController;
use App\Http\Controllers\Request\Api\Cart\SaveCart;
use Illuminate\Support\Facades\Route;

Route::get('api/products', [ProductsApiController::class, 'get'])
    ->name('products');

Route::post('api/cart/savecart', [SaveCart::class, 'post'])
    ->name('cart.save');
