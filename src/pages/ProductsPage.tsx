import { useState, useEffect } from 'react'
import ProductCard from "../components/ProductCard";
import productsHandler from "../models/productsHandler";
import Underbar from '../components/UnderBar';

function ProductsPage(props) {
    const [categories, setCategories] = useState([]);
    const [productsGroups, setProductsGroups] = useState(<></>);
    const [category, setCategory] = useState<String>("")

    useEffect(() => {
        const fetchData = async () => {
            setCategories(await productsHandler.fetchCategories())
        }
        fetchData()
    }, [])

    useEffect(() => {
        productMaker(props.products)
    }, [props.products])

    useEffect(() => {
        console.log(categories)
    }, [categories])

    // Filters on category
    useEffect(() => {
        if(category == "all") {
            productMaker(props.products)
        } else {
        let filteredProducts = props.products.filter(e => {
            return e.category == category
        })
        productMaker(filteredProducts)
        }
    }, [category])

    function productMaker(products: any){
        if (products[1]) {
            let productsGroup = products.map(e => {
            return (<ProductCard key={e.id} title={e.title} description={e.description} price={e.price} image={e.image} id={e.id} articleId={props.articleId}/>)
            })
            setProductsGroups(productsGroup)
        }
    }

    return (
        <>
            <Underbar categories={categories} setCategory={setCategory}/>
            <div className="grid grid-cols-4 gap-4 mt-10">
                {productsGroups}
            </div>
        </>
    )
}

export default ProductsPage;