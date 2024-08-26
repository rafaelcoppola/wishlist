import { useContext, useEffect, useState } from 'react';
import Loading from '@/Components/Loading';
import ProductCard from '@/Components/Products/ProductCard';
import Container from '@/Components/Products/Container';
import AppContext from '@/Context/AppContext';
import { Alert } from '@/Components/Alert/Alert';
import { api } from '@/api/api';

export default function Products() {
    const { showAlerts } = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const [assetImage, setAssetImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(route('products')).then((response) => {
            setProducts(response.data.products)
            setAssetImage(response.data.assetImage)
            setLoading(false);
        });

    }, []);

    if (loading) {
        return (
            <div className="w-full flex justify-center h-[100vh] items-center bg-black">
                <Loading />
            </div>
        );
    }
    
    return (
        <div>
            {
                showAlerts &&

                <Alert />
            }
            <Container>
                {
                    products.length > 0 ?
                        products.map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                                imgSrc={assetImage}
                            />
                        )
                        :
                        <div className='flex justify-center flex-wrap'>
                            <span className='flex items-center px-3 py-2 mr-2 text-white'>
                                Por favor rode o php artisan db:seed
                            </span>
                        </div>
                }
            </Container>
        </div>

    );
}
