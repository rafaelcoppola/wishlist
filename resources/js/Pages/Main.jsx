import Header from '@/Components/Header';
import ProductCard from '@/Components/Products/ProductCard';
import { Head } from '@inertiajs/react';

export default function Main({ products, assetImage, auth }) {
    
    return (
        <>
            <Head title="Products" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Header auth={auth} />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-4">
                                {products.map(product =>
                                    <ProductCard
                                        key= {product.id}
                                        name={product.name}
                                        description={product.description}
                                        imgSrc={assetImage}
                                        imgFile = {product.image}
                                    />
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
