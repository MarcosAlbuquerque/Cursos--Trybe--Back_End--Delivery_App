import React from 'react';
import PropTypes from 'prop-types';

const ShopCartButton = ({ price }) => (
  <div>
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
    >
      {price.replace(/\./, ',')}
    </button>
  </div>
);

export default ShopCartButton;

ShopCartButton.propTypes = {
  price: PropTypes.string.isRequired,
};
