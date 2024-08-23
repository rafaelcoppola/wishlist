import fetchProducts from '@/api/Product/FetchProducts';
import Header from '@/Components/Header';
import Loading from '@/Components/Loading';
import ProductCard from '@/Components/Products/ProductCard';
import { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [assetImage, setAssetImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response.products)
            setAssetImage(response.assetImage)
            setLoading(true);
        });

    }, []);

    return (
        <>

            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Header />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Loading />
                        <div className="mt-6">

                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-4">
                                {
                                    products.map(product =>
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            imgSrc={assetImage}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
