const fetchProducts = async function () {
    const response = await fetch('api/products');
    const data = await response.json();

    return data;
}

export default fetchProducts;