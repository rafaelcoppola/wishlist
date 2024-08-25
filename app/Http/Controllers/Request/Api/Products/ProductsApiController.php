<?php

namespace App\Http\Controllers\Request\Api\Products;

use App\Http\Controllers\Controller;
use App\Models\product;
use Illuminate\Http\JsonResponse;

class ProductsApiController extends Controller
{
    public function get(): JsonResponse
    {
        $products = product::all();
        $assetImage = asset('assets/images/');
        
        return response()->json([
            'products'=> $products,
            'assetImage' => $assetImage
        ]);
    }
}
