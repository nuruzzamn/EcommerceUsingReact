import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import ShopCategory from '../pages/ShopCategory'

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

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Eshop