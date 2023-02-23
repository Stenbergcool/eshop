import { useState, useEffect } from 'react'
import ProductCard from "../components/ProductCard";
import productsHandler from "../models/productsHandler";
import Underbar from '../components/UnderBar';

function ProductsPage() {
    const [products, setProducts] = useState<{ id: number, title: string, description: string, price: number, category: string, rating: {rate: number, count:number} }[]>([]);
    const [categories, setCategories] = useState([]);
    const [productsGroups, setProductsGroups] = useState(<></>);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await productsHandler.fetchProducts())
            setCategories(await productsHandler.fetchCategories())
        }
        fetchData()
    }, [])

    useEffect(() => {
        productMaker(products)
    }, [products])

    useEffect(() => {
        console.log(categories)
    }, [categories])

    function productMaker(products: any){
        if (products[1]) {
            console.log("sd")
        let productsGroup = products.map(e => {
            return (<ProductCard key={e.id} title={e.title} description={e.description} />)
        })
        setProductsGroups(productsGroup)
        }
    }

    return (
        <>
        <Underbar categories={categories}/>
    <div className="grid grid-rows-4 grid-flow-col gap-2">
        {productsGroups}
    </div>
    </>
    )
}

export default ProductsPage;