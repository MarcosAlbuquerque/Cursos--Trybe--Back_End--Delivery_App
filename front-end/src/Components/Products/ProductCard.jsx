import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { name, price, url, id } = product;

  const card = {
    border: '1px solid black',
    width: '200px',
  };

  const prefix = 'customer_products__';

  return (
    <div style={ { display: 'flex' } }>
      <div style={ card }>
        <span data-testid={ `${prefix}element-card-price-${id}` }>{price}</span>
        <img
          data-testid={ `${prefix}img-card-bg-image-${id}` }
          src={ url }
          alt="Foto de bebida"
        />
        <div>
          <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
          <div>
            <button
              data-testid={ `${prefix}button-card-rm-item-${id}` }
              type="button"
            >
              -
            </button>
            <input
              type="number"
              data-testid={ `${prefix}input-card-quantity-${id}` }
            />
            <button
              data-testid={ `${prefix}button-card-add-item-${id}` }
              type="button"
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
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
