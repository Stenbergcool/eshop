let productsHandler = {
    fetchProducts: async function fetchProducts() {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        console.log("fetch done")
        return data
    },
    fetchCategories: async function fetchCategories() {
        let response = await fetch('https://fakestoreapi.com/products/categories')
        let data = await response.json()
        return data
    }
}


export default productsHandler;