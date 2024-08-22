<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Inertia\Inertia;
use App\Models\product;

class Main extends Controller
{
    public function show(): Response
    {
        $tplData = [];

        $products = product::all();

        $tplData['products'] = $products;
        $tplData['assetImage'] = asset('assets/images/');
        
        return Inertia::render('Main', $tplData);
    }
}
