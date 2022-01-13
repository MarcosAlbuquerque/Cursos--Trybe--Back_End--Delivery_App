import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Administrator from './Pages/Admin';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <Orders /> } />
        <Route path="/admin/manage" element={ <Administrator /> } />
      </Routes>
    </Router>
  );
}

export default App;
