import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-100">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ProductsPage" element={<ProductsPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
