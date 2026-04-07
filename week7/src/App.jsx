import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Order from './components/Order'
import Setting from './components/Setting'
import Checkout from './components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/products'>Products</Link> |
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='order' element={<Order/>}></Route>
          <Route path='setting' element={<Setting/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App