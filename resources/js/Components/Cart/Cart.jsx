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
        var data = {
            product_id: '',
            qtd: ''
        };

        cartProducts.map((product) => {
            data.product_id = formData.getAll(`product_id[${product.id}][]`);
        });
        console.log(data)

        await api.post(route('cart.save'), {
            data: data
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
