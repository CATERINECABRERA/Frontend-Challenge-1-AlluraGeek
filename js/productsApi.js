export async function getProducts() {
    const response = await fetch("http://localhost:4000/productos");

    const products = response.json();

    return products;
}

export const productsApi = {
    getProducts
};