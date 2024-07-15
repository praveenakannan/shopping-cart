import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import { useState } from 'react';

const App = () => {
  const [cart, setCart]=useState([]);
  return (
    <div>
<BrowserRouter>
<Header cart={cart}/>
<div className='container'>
  <Routes>
  <Route path='/' element={<Home cart={cart} setCart={setCart}  />}/>
  <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}  />}/>
  </Routes>
</div>
</BrowserRouter>
<Product/>
     

      
    </div>
  );
};

export default App;