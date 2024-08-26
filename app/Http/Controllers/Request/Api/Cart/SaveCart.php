<?php

namespace App\Http\Controllers\Request\Api\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\SaveCartRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SaveCart extends Controller
{
    public function post(SaveCartRequest $request): Response {
        echo '<pre>';
        print_r($request->input());
        die();
    }
}
