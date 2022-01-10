import React from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../CartContext';

const ProductCard = ({ product }) => {
  const { name, price, url_image: url, id } = product;
  const { providerValues } = React.useContext(CartContext);
  const { verifyCartAndIncrease } = providerValues;

  const card = {
    border: '1px solid black',
    width: '200px',
  };

  const prefix = 'customer_products__';

  // function decreaseCartButton(target) {
  //   if ( productPrice === 0 && productQnt === 0 ) {
  //     return null;
  //   }

  // };

  function increaseCartButton(target) {
    const { id: idItem, name: nameItem, title } = target;
    verifyCartAndIncrease(idItem, nameItem, title);
  }

  // function insertInputCartValue(target) {

  // }

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
              onClick={ ({ target }) => decreaseButton(target) }
            >
              -
            </button>
            <input
              id={ id }
              type="number"
              data-testid={ `${prefix}input-card-quantity-${id}` }
              value="0"
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
