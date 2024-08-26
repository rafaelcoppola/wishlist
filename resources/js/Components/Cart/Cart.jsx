import './Cart.css';
import AppContext from '@/Context/AppContext';
import { useContext } from 'react';
import CartItem from './CartItem';
import { api } from '@/api/api';

export default function Cart() {
    const { isCartVisible, cartProducts } = useContext(AppContext);

    async function handleCartSave(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        var postData = [];

        cartProducts.map((product) => {
            let productData = {
                product_id: '',
                quantity: formData.get(`quantity[${product.id}]`)
            }

            postData.push(productData)
        });
        
        console.log(postData)

        await api.post(route('cart.save'), {
            data: postData
        })

    }

    return (
        <form onSubmit={handleCartSave}>
            <div className={`${isCartVisible ? "show-cart" : "hide-cart"} w-full max-w-[400px] bg-white h-[100vh] fixed top-0 right-0 pt-[100px] px-[20px] overflow-auto`}>
                <CartItem />
                <div>
                    <button type="submit">Salvar Carrinho</button>
                </div>
            </div>
        </form>

    )
}
