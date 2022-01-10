import React from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [productId, setProductId] = React.useState('');
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState(0);
  const [productQnt, setProductQnt] = React.useState(0);
  const [productImg, setProductImg] = React.useState(null);

  const shoppingCart = [];

  const cartItens = {
    productId,
    productName,
    productPrice,
    productQnt,
    productImg,
  };

  function verifyCart() {
    const verify = shoppingCart.some((item) => item.productId === productId);
    console.log({ verify });
    if (!verify && productQnt > 0) {
      shoppingCart.push({ ...cartItens });
      console.log({ shoppingCart });
      console.log({ cartItens });
    } else {
      const newShoppingCart = shoppingCart.filter((item) => item.id !== productId);
      console.log({ newShoppingCart });
      const newObject = { ...newShoppingCart, cartItens };
      shoppingCart.push(newObject);
    }
  }

  React.useEffect(() => {
    verifyCart();
  }, [productQnt]);

  const providerValues = {
    setProductId,
    setProductName,
    setProductPrice,
    setProductQnt,
    setProductImg,
  };

  return (
    <CartContext.Provider value={ { cartItens, providerValues } }>
      {children}
    </CartContext.Provider>
  );
};

CartStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
