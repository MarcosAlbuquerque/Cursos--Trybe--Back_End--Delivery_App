import React from 'react';
import { GET_PRODUCTS } from '../../Api';
import { CartContext } from '../../CartContext';
import useAxios from '../../Hooks/useAxios';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import ShopCartButton from './ShopCartButton';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const { providerValues } = React.useContext(CartContext);
  const { shoppingCart } = providerValues;

  const { request } = useAxios();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const requestProducts = async () => {
    const options = GET_PRODUCTS();
    const response = await request(options);
    setProducts(response.data);
  };

  function totalPrice() {
    const totalSum = shoppingCart
      .map((item) => parseFloat([Number(item.price) * item.productQnt]).toFixed(2))
      .map((item) => Number(item))
      .reduce((acc, cv) => acc + cv, 0);
    localStorage.setItem('totalSum', totalSum.toFixed(2).replace(/\./, ','));
    return totalSum.toFixed(2);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    await requestProducts();
  }, []);

  return (
    <div className={ styles.container }>
      { products.map((product, i) => <ProductCard product={ product } key={ i } />) }
      <ShopCartButton price={ totalPrice() } />
    </div>
  );
};

export default ProductList;
