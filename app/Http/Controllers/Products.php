<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Inertia\Inertia;
use App\Models\product;

class Products extends Controller
{
    public function index(): Response
    {
        $tplData = [];

        $products = product::all();

        $tplData['products'] = $products;
        $tplData['assetImage'] = asset('assets/images/');
        
        return Inertia::render('Products', $tplData);
    }
}
