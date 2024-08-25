import { useEffect, useState } from 'react';
import fetchProducts from '@/api/Product/FetchProducts';
import Loading from '@/Components/Loading';
import ProductCard from '@/Components/Products/ProductCard';
import Container from '@/Components/Products/Container';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [assetImage, setAssetImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response.products)
            setAssetImage(response.assetImage)
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
        <Container>
            {
                products.map(product =>
                    <ProductCard
                        key={product.id}
                        product={product}
                        imgSrc={assetImage}
                    />
                )
            }
        </Container>
    );
}
