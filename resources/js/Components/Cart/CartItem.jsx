import AppContext from "@/Context/AppContext";
import { useContext, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function CartItem({ data }) {
    const { cartProducts, setCartProducts } = useContext(AppContext);

    function handleRemoveProduct(id) {
        const updateProducts = cartProducts.filter((product) => product.id != id);

        setCartProducts(updateProducts);
    }

    function handleChange(id, newQuantity) {
        const updatedQuantity = parseInt(newQuantity);

        const updatedProducts = cartProducts.map((product) => {
            if (product.id === id) {
                product.quantity = isNaN(updatedQuantity) ? '' : updatedQuantity;
            }
            return product;
        });

        setCartProducts(updatedProducts);
    }

    return (
        <>
            {
                cartProducts.map((product) =>
                    <div className="flex items-start border-b-[1px] border-b-[#ddd] pb-5 mb-5 relative" key={product.id}>
                        <input type="hidden" name={`product_id[${product.id}]`} value={product.id} />
                        <img src={product.img} alt="imagem" className="w-[70px]" />

                        <div className="py-0 pl-3 pr-9 flex flex-row w-full justify-around items-center">
                            <h2 className="w-[8.85rem] font-medium text-gray-600">{product.name}</h2>
                            <input type="number" className="border-solid border-2 border-stone-500 rounded-lg max-w-[70px] h-7" name={`quantity[${product.id}]`} id="" min={0} value={product.quantity} onChange={(e) => handleChange(product.id, e.target.value)} />

                            <button type="button" className="absolute top-o right-0 text-red-600 cursor-pointer">
                                <MdRemoveShoppingCart onClick={() => handleRemoveProduct(product.id)} />
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );
}