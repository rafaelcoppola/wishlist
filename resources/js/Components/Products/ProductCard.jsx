import AddToCartButton from "./AddToCartButton";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import React from "react";

export default function ProductCard(props) {
    const { imgSrc, product } = props;
    const { image, name, description } = product;

    return (
        <div className="flex flex-col items-center gap-6 rounded-lg p-6 divide-y ring-1 divide-stone-500  ring-white/[0.05] transition duration-300 hover:ring-black/20 lg:p-7 bg-zinc-900 hover:text-white/70 hover:ring-zinc-700 ">
            <ProductImage src={imgSrc} imgFile={image} />

            <ProductDescription name={name} description={description} />

            <AddToCartButton product={product} imgSrc={imgSrc} />
        </div>
    );
}