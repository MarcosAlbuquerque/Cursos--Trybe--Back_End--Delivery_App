import React from 'react';
import { GET_PRODUCTS } from '../../Api';
import useAxios from '../../Hooks/useAxios';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

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
    <div className={ styles.container }>
      { products.map((product, i) => <ProductCard product={ product } key={ i } />) }
    </div>
  );
};

export default ProductList;
