<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class Wishlist extends Controller
{

    public function show(): Response
    {
        
        return Inertia::render('Wishlist/Wishlist');
    }
}
