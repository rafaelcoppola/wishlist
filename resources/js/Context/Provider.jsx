import { useState } from "react";
import AppContext from "./AppContext";

export default function Provider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [productId, setProductId] = useState('');

    const data = {
        cartProducts,
        setCartProducts,
        isCartVisible,
        setIsCartVisible,
        setProductId
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}