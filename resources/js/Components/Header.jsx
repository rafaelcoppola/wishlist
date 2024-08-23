// import Logout from '@/Pages/Auth/Logout';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(props) {
    const { auth } = props
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl px-6 lg:max-w-7xl">
                <header className="flex mt-4">
                    <div className="flex flex-1 justify-end">
                        <a
                            href={route('login')}
                            className="flex items-center px-3 py-2 mr-2 dark:text-white dark:hover:text-white/80 border-solid border-2 border-stone-500 rounded-lg"
                        >
                            Login
                        </a>
                        
                        <a
                            href={route('wishlist')}
                            className="flex items-center px-3 py-2 dark:text-white dark:hover:text-white/80 border-solid border-2 border-stone-500 rounded-lg"
                        >
                            <FaShoppingCart className="mr-2" /> Carrinho
                        </a>
                    </div>
                </header>
            </div>
        </div>
    );
}