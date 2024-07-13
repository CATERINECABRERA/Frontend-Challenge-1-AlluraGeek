import { productsApi } from './productsApi.js';

const productsContainer = document.getElementById('products');

export function createProductCard(product) {
    const cardElement = document.createElement("div");

    const { name, url, price } = product;

    cardElement.innerHTML = `<img src="${url}" alt="logo canal alura" width="200" height="200">
                            <span>${name}</span>
                            <span>${price}</span>`;
    return cardElement;
}

export async function getProducts() {
    try {
        const products = await productsApi.getProducts();

        products.forEach(product => {
           const productCard = createProductCard(product);
           productsContainer.appendChild(productCard);
           console.log('wtf');
        });
    } catch (error) {
        console.log('ha sucedido un error', error);
    }
}

getProducts();