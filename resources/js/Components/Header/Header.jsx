import AppContext from '@/Context/AppContext';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    const { cartProducts, isCartVisible, setIsCartVisible } = useContext(AppContext);

    function handleOpenCart() {
        setIsCartVisible(!isCartVisible);
    }

    return (
        <header className="bg-zinc-900 fixed w-full z-[1] p-4">
            <div className="flex flex-1 justify-end items-center relative">
                <button
                    className="flex items-center px-3 py-2 mr-2 text-white hover:text-white/80 border-solid border-2 border-stone-500 rounded-lg size-11"
                    onClick={handleOpenCart}
                >
                    <FaShoppingCart />
                    {
                        cartProducts.length > 0 &&
                        <span className='bg-red-600 w-[15px] h-[15px] absolute top-[2px] right-[10px] text-white text-[11px] font-semibold rounded-[15px] flex items-center justify-center '>
                            {cartProducts.length}
                        </span>
                    }
                </button>
            </div>
        </header>
    );
}