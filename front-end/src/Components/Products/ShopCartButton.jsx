import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ShopCartButton({ price }) {
  const navigate = useNavigate();

  function customerCheckout() {
    navigate('/customer/checkout');
  }

  return (
    <div>
      <button
        type="button"
        disabled={ Number(price) <= 0 }
        onClick={ () => customerCheckout() }
        data-testid="customer_products__button-cart"
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {price.replace(/\./, ',')}
        </span>
      </button>
    </div>);
}

export default ShopCartButton;

ShopCartButton.propTypes = {
  price: PropTypes.string.isRequired,
};
