let productsHandler = {
    fetchProducts: async function fetchProducts() {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        return data

    }
}


export default productsHandler;