<?php

namespace App\Http\Controllers\Request\Api\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SaveCart extends Controller
{
    public function post(Request $request): Response {
        echo '<pre>';
        print_r($request->input());
        die();
    }
}
