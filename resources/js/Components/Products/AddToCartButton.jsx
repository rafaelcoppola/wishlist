import { Button } from "@headlessui/react";
import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton() {
    return (
        <div className="w-full flex justify-center">
            <Button
                className="mt-4 text-white text-sm/relaxed flex items-center text-center"
                id="add-cart"
            >
                <FaCartPlus  className="mr-2" />Adicionar ao carrinho
            </Button>
        </div>
    );
}