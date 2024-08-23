import './bootstrap';
import '../css/app.css';

import ReactDOM from 'react-dom/client';
import Products from './Pages/Products';

const App = () => {
    return (
        <div>
            <Products/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
