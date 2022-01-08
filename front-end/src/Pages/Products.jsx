import React from 'react';
import NavBar from '../Components/Products/NavBar';
import ProductList from '../Components/Products/ProductList';

const Products = () => {
  const currentUser = JSON
    .parse(localStorage.getItem('loggedUser'));

  return (
    <div>
      <NavBar user={ currentUser } />
      <ProductList />
      {/* <ShopCartButton /> */}
    </div>
  );
};

export default Products;
