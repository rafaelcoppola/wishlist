import './Cart.css';
import AppContext from '@/Context/AppContext';
import { useContext, useEffect } from 'react';
import CartItem from './CartItem';
import { api } from '@/api/api';

export default function Cart() {
    const { isCartVisible, setIsCartVisible, cartProducts, setCartProducts, setShowAlerts, setContentAlerts } = useContext(AppContext);

    async function handleCartSave(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const postData = [];

        cartProducts.map((product) => {
            const productData = {
                product_id: formData.get(`product_id[${product.id}]`),
                quantity: formData.get(`quantity[${product.id}]`)
            }

            postData.push(productData)
        });

        await api.post(route('cart.save'), {
            data: postData
        }).then((response) => {

            setCartProducts([]);
            setIsCartVisible(false);
            setShowAlerts(true);
            setContentAlerts({
                message: response.data.message,
                alert_type: response.data.alert_type
            })
        })


    }

    return (
        <form onSubmit={handleCartSave}>
            <div className={`${isCartVisible ? "show-cart" : "hide-cart"} w-full max-w-[400px] bg-white h-[100vh] fixed top-0 right-0 pt-[100px] px-[20px] overflow-auto`}>
                <CartItem />
                {
                    cartProducts.length > 0 ?
                        <div>
                            <button className='flex items-center px-3 py-2 mr-2 text-black hover:text-black/80 border-solid border-2 border-stone-500 rounded-lg' type="submit">
                                Salvar Carrinho
                            </button>
                        </div>
                        :
                        <div className='flex justify-center flex-wrap'>
                            <span className='flex items-center px-3 py-2 mr-2 text-black'>
                                Carrinho vazio
                            </span>
                        </div>
                }

            </div>
        </form>

    )
}
