import { Button } from "@headlessui/react";
import { FaCartPlus } from "react-icons/fa";
import  setProduct  from "../../Controller/Cart/Cart";
import { useState } from "react";

export default function AddToCartButton(props) {

    return (
        <div className="w-full flex justify-center">
            <Button
                className="mt-4 text-white text-sm/relaxed flex items-center text-center"
            >
                <FaCartPlus className="mr-2" />Adicionar ao carrinho
            </Button>
        </div>
    );
}