import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import ProductCard from '../components/ProductCard'


function Home(props) {
    const [productsGroups, setProductsGroups] = useState(<></>);

    useEffect(() => {
        productMaker(props.products)
    }, [props.products])

    function productMaker(products: any){
        if (products[1]) {
            let productsGroup = products.map(e => {
            return (
            <ProductCard
                key={e.id}
                title={e.title}
                description={e.description}
                price={e.price}
                image={e.image}
                id={e.id}
                articleId={props.articleId}
            />)
            })
            setProductsGroups(productsGroup)
            console.log(productsGroups)
        }
    }
    return (
        <div className=" max-w-7xl min-h-screen grid grid-cols-3 overflow-y-hidden">
            <div>
                <motion.div className="z-10"
                whileHover={{ y: [0, -1400, 0]}}
                transition={{ repeat:Infinity, duration: 20}}
                >
                        {productsGroups}
                </motion.div>
            </div>
            <div>
                <motion.div className="overflow-hidden z-10"
                style={{y:-300}}
                whileHover={{ y: [-300, 0, -2000, -300]}}
                transition={{ repeat:Infinity, duration: 20}}
                >
                        {productsGroups}
                </motion.div>
            </div>
            <div>
                <motion.div className="overflow-hidden z-10"
                style={{y:-1000}}
                whileHover={{ y: [-1000, 0, -2000, -1000]}}
                transition={{ repeat:Infinity, duration: 20}}
                >
                        {productsGroups}
                </motion.div>
            </div>
        </div>
    )
}

export default Home;