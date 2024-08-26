import { useState } from "react";
import AppContext from "./AppContext";

export default function Provider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [productId, setProductId] = useState('');
    const [showAlerts, setShowAlerts] = useState(true);
    const [contentAlerts, setContentAlerts] = useState([]);

    const data = {
        cartProducts,
        setCartProducts,
        isCartVisible,
        setIsCartVisible,
        setProductId,
        showAlerts,
        setShowAlerts,
        contentAlerts,
        setContentAlerts
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}