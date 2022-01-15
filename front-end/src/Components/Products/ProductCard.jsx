import React from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../CartContext';

const ProductCard = ({ product }) => {
  const { name, price, url_image: url, id } = product;
  const [inputValue, setInputValue] = React.useState(0);
  const { providerValues } = React.useContext(CartContext);
  const {
    verifyCartAndIncrease,
    decreaseCart,
    insertInputValueToCart,
    shoppingCart,
  } = providerValues;

  const card = {
    border: '1px solid black',
    width: '200px',
  };

  const prefix = 'customer_products__';

  function decreaseCartButton(target) {
    const { id: idItem } = target;
    if (inputValue > 0) {
      decreaseCart(idItem);
      setInputValue(inputValue - 1);
    }
  }

  function increaseCartButton(target) {
    const { id: idItem, name: nameItem, title } = target;

    verifyCartAndIncrease(idItem, nameItem, title);
    setInputValue(inputValue + 1);
  }

  function insertInputCartValue(target) {
    const { id: idItem, name: nameItem, title, value } = target;

    const productQuantity = Number(value);

    if (productQuantity >= 0) {
      setInputValue(productQuantity);
      insertInputValueToCart(idItem, nameItem, title, productQuantity);
    }
  }

  React.useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <div style={ { display: 'flex' } }>
      <div style={ card }>
        <span
          data-testid={ `${prefix}element-card-price-${id}` }
        >
          {price.replace(/\./, ',')}
        </span>
        <img
          data-testid={ `${prefix}img-card-bg-image-${id}` }
          src={ url }
          width="100px"
          alt="Foto de bebida"
        />
        <div>
          <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
          <div>
            <button
              id={ id }
              data-testid={ `${prefix}button-card-rm-item-${id}` }
              type="button"
              onClick={ ({ target }) => decreaseCartButton(target) }
            >
              -
            </button>
            <input
              id={ id }
              name={ name }
              title={ price }
              type="number"
              data-testid={ `${prefix}input-card-quantity-${id}` }
              value={ inputValue }
              onChange={ ({ target }) => insertInputCartValue(target) }
            />
            <button
              id={ id }
              name={ name }
              title={ price }
              data-testid={ `${prefix}button-card-add-item-${id}` }
              type="button"
              onClick={ ({ target }) => increaseCartButton(target) }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
