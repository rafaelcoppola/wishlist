<?php

use App\Http\Controllers\Request\Api\Products\ProductsApiController;
use Illuminate\Support\Facades\Route;

Route::get('api/products', [ProductsApiController::class, 'index'])
    ->name('products');