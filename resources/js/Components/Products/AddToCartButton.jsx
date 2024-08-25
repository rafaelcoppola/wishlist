import { Button } from "@headlessui/react";
import { FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import AppContext from "@/Context/AppContext";

export default function AddToCartButton({ product, imgSrc }) {
    const { cartProducts, setCartProducts } = useContext(AppContext);


    function HandleSetCart(id) {
        const alreadyItemInCart = cartProducts.find((product) => product.id == id);
        const data = {
            id: product.id,
            name: product.name,
            img: `${imgSrc}/${product.image}`,
            quantity: 1
        };

        setCartProducts([...cartProducts, data]);

        if (alreadyItemInCart) {
            const updateItemCart = cartProducts.map((product) => {

                if (product.id == id) {
                    product.quantity++
                }

                return product;
            });

            setCartProducts(updateItemCart);
        }
    }

    return (
        <div className="w-full flex justify-center">
            <Button
                className="mt-4 text-white text-sm/relaxed flex items-center text-center"
                onClick={() => HandleSetCart(product.id)}
            >
                <FaCartPlus className="mr-2" />Adicionar ao carrinho
            </Button>
        </div>
    );
}