import React from 'react';
import { GET_PRODUCTS } from '../../Api';
import { CartContext } from '../../CartContext';
import useAxios from '../../Hooks/useAxios';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const { providerValues } = React.useContext(CartContext);
  const { shoppingCart } = providerValues;

  const { request } = useAxios();

  const requestProducts = async () => {
    const options = GET_PRODUCTS();
    const response = await request(options);
    setProducts(response.data);
  };

  React.useEffect(async () => {
    await requestProducts();
  }, []);

  const total = shoppingCart
    .map((item) => parseFloat([Number(item.price) * item.productQnt]).toFixed(2))
    .map((item) => Number(item))
    .reduce((acc, cv) => acc + cv, 0);

  return (
    <div className={ styles.container }>
      { products.map((product, i) => <ProductCard product={ product } key={ i } />) }
      {total.toFixed(2)}
    </div>
  );
};

export default ProductList;
