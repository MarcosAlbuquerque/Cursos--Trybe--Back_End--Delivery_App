import React from 'react';
import { GET_PRODUCTS } from '../../Api';
import useAxios from '../../Hooks/useAxios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  const { request } = useAxios();

  const requestProducts = async () => {
    const options = GET_PRODUCTS();
    const response = await request(options);
    setProducts(response.data);
  };

  React.useEffect(async () => {
    await requestProducts();
  }, []);

  return (
    <div>
      { products.map((product, i) => <ProductCard product={ product } key={ i } />) }
    </div>
  );
};

export default ProductList;
