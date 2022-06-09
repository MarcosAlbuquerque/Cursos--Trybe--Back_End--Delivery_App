import React from 'react';
import PropTypes from 'prop-types';

const magicNumber = -1;

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [qntItems, setQntItems] = React.useState({});

  function verifyCartAndIncrease(idItem, nameItem, price) {
    const cartItens = {
      id: idItem,
      name: nameItem,
      price,
      productQnt: 1,
    };

    const verify = shoppingCart.findIndex((item) => item.id === idItem);
    if (verify === magicNumber) {
      setShoppingCart([...shoppingCart, cartItens]);
    } else {
      setShoppingCart([...shoppingCart
        .map((item, index) => {
          if (index === verify) {
            item.productQnt += 1;
          }
          return item;
        })]);
    }
  }

  function decreaseCart(idItem) {
    const verify = shoppingCart.findIndex((item) => item.id === idItem);
    setShoppingCart([...shoppingCart
      .map((item, index) => {
        if (index === verify && item.productQnt > 0) {
          item.productQnt -= 1;
        }
        return item;
      })]);
  }

  function insertInputValueToCart(idItem, nameItem, price, value) {
    const cartItens = {
      id: idItem,
      name: nameItem,
      price,
      productQnt: value,
    };

    const verifyIndex = shoppingCart.findIndex((item) => item.id === idItem);
    if (verifyIndex === magicNumber) {
      setShoppingCart([...shoppingCart, cartItens]);
    } else {
      setShoppingCart([...shoppingCart
        .map((item, index) => {
          if (index === verifyIndex) {
            item.productQnt = value;
          }
          return item;
        })]);
    }
  }

  const providerValues = {
    shoppingCart,
    verifyCartAndIncrease,
    decreaseCart,
    insertInputValueToCart,
    qntItems,
    setQntItems,
  };

  return (
    <CartContext.Provider value={ { providerValues } }>
      {children}
    </CartContext.Provider>
  );
};

CartStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
