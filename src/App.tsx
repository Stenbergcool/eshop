import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {

  return (
    <div className="App bg-slate-100 max-w-7xl">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ProductsPage" element={<ProductsPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
