<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\product;
use Inertia\Inertia;
use Inertia\Response;

class Wishlist extends Controller
{

    public function show(): Response
    {
        $tplData =[];

        $product = Product::find(1);
        
        $tplData['product'] =$product;
        
        return Inertia::render('Wishlist/Wishlist', $tplData);
    }
}
