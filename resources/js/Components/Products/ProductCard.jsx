import AddToCartButton from "./AddToCartButton";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import React from "react";
export default function ProductCard(props) {
    const { imgSrc, product } = props;
    const { image, name, description, id } = product;

    return (
        <div className=" divide-y divide-stone-500 flex flex-col items-center gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none md:row-span-3 lg:p-7 dark:bg-zinc-900 dark:hover:text-white/70 dark:hover:ring-zinc-700 ">
            <ProductImage src={imgSrc} imgFile={image} />

            <ProductDescription name={name} description={description} />

            <AddToCartButton
                productId={id}
                product={product}
            />
        </div>
    );
}