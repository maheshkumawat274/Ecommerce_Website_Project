import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'
import FooterItem from './components/footer/FooterItem'
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}></Route>
        <Route path='/men'element={<ShopCategory banner = {men_banner} category='men'/>}></Route>
        <Route path='/women'element={<ShopCategory banner = {women_banner} category='women'/>}></Route>
        <Route path='/kids'element={<ShopCategory banner = {kid_banner} category='kid'/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={< Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <FooterItem/>
     </BrowserRouter>
    </>
  )
}

export default App