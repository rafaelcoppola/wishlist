import './bootstrap';
import '../css/app.css';

import ReactDOM from 'react-dom/client';
import Products from './Pages/Products';
import Header from '@/Components/Header/Header';

import Provider from './Context/Provider';
import Cart from './Components/Cart/Cart';

const App = () => {
    return (
        <Provider>
            <Header />
            <Products />
            <Cart />
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
