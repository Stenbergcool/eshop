import { useState, useEffect } from 'react'
import ProductCard from "../components/ProductCard";
import productsHandler from "../models/productsHandler";

function ProductsPage() {
    const [products, setProducts] = useState<{ id: number, title: string, description: string, price: number, category: string, rating: {rate: number, count:number} }[]>([]);
    const [productsGroups, setProductsGroups] = useState(<></>);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await productsHandler.fetchProducts())
        }
        fetchData()
    }, [])

    useEffect(() => {
        productMaker(products)
    }, [products])

    function productMaker(products: any){
        if (products[1]) {
            console.log("sd")
        let productsGroup = products.map(e => {
            return (<ProductCard title={e.title} description={e.description} />)
        })
        console.log(productsGroup)
        setProductsGroups(productsGroup)
        }
    }

    return (
    <div className="grid grid-rows-4 grid-flow-col gap-2">
        {productsGroups}
    </div>
    )
}

export default ProductsPage;