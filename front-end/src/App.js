import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Administrator from './Pages/Admin';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import OrderDetails from './Pages/OrderDetails';
import Seller from './Pages/Seller';
import SellerOrderDetails from './Pages/SellerOrderDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route path="/admin/manage" element={ <Administrator /> } />
        <Route path="/seller/orders" element={ <Seller /> } />
        <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      </Routes>
    </Router>
  );
}

export default App;
