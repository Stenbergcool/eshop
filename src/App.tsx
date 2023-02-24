import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Route, Routes } from 'react-router-dom'
import productsHandler from "./models/productsHandler";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SingleProductPage from './pages/SingleProductPage';
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {
  const [products, setProducts] = useState<{ id: number, title: string, description: string, price: number, category: string, rating: {rate: number, count:number} }[]>([]);
  const cart = useRef([])
  const articleId = useRef(1)

  useEffect(() => {
        const fetchData = async () => {
            setProducts(await productsHandler.fetchProducts())
        }
        fetchData()
    }, [])

  return (
    <div className="App bg-white">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home products={products}/>}></Route>
            <Route path="/ProductsPage" element={<ProductsPage products={products} articleId={articleId}/>}></Route>
            <Route path="/SingleProductPage" element={<SingleProductPage products={products} articleId={articleId} cart={cart}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
