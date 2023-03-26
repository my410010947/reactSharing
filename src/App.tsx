import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import Goods from './components/Goods/Goods';
import Error from './components/Error/Error';
import { Routes, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <>
        <div role="App" className="App">
          <h1>XD Shopping Website</h1>
          <nav style={{marginTop:"50px"}}>
            <NavLink to="/">Home</NavLink>
            &nbsp;&nbsp;
            <NavLink to="Goods">Products</NavLink>
            &nbsp;&nbsp;
            <NavLink to="Cart">Cart</NavLink>
          </nav>
        </div>
        <Routes>
          <Route path="/" />
          <Route path="/Goods" element={<Goods />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />         
        </Routes>
    </>
  );
}

export default App;
