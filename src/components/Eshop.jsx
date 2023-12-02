import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import ShopCategory from '../pages/ShopCategory'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import LoginSignup from '../pages/LoginSignup'

const Eshop = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory category="men"/>}></Route>
          <Route path='/women' element={<ShopCategory category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>

          <Route path='/product' element={<Products/>}> 
              <Route path=':productId' element={<Products/>}> </Route>
          </Route>

          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Eshop