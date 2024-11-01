export const getAllProducts = () => {
    return fetch('https://fakestoreapi.com/products');
}

export const getJwelleryProducts = () => {
    return fetch ('https://fakestoreapi.com/products/category/jewelery');
}

export const getElectronicsProducts = () => {
    return fetch('https://fakestoreapi.com/products/category/electronics');
}

export const getBooksProducts = () => {
    return fetch('http://localhost:8080/books');
}