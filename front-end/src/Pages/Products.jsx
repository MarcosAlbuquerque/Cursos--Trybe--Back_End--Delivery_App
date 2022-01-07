import React from 'react';
import NavBar from '../Components/Products/NavBar';
import ProductList from '../Components/Products/ProductList';

const Products = () => {
  const currentUser = JSON
    .parse(localStorage.getItem('User'));

  console.log(currentUser);

  return (
    <div>
      <NavBar role={ currentUser.role } />
      <ProductList />
      {/* <ShopCartButton /> */}
    </div>
  );
};

export default Products;
