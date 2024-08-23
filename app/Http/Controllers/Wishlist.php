<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\product;
use Illuminate\View\View;

class Wishlist extends Controller
{

    public function show(): View
    {
        $tplData =[];

        $product = Product::find(1);
        
        $tplData['product'] =$product;

        return view('Wishlist/Wishlist', $tplData);
    }
}
