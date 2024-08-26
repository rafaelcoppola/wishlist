<?php

namespace App\Http\Controllers\Request\Api\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\SaveCartRequest;
use App\Models\cart;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SaveCart extends Controller
{
    public function post(SaveCartRequest $request): Response
    {
        $postData = $request->input();

        DB::beginTransaction();
        $response = [];

        try {
            foreach ($postData['data'] as $product) {

                Cart::create([
                    'product_id' => $product['product_id'],
                    'user_id' => 1, //hard-coded because user creation does not exist  
                    'quantity' => $product['quantity']
                ]);
            }

            $response = [
                'code_status' => 200,
                'message' => "Dados salvos. Obrigado pela oportunidade do teste =)",
                'alert_type' => "success"
            ];

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            Log::error($e->getMessage());

            $response = [
                'code_status' => 500,
                'message' => "Erro desconhecido, contate o suporte",
                'alert_type' => "error"
            ];
        }

        return response(json_encode($response));
    }
}
