import React from 'react';
import PropTypes from 'prop-types';

const table = 'seller_order_details__element-order-table-';

function SellerProductRow({ product, index }) {
  const { salesProducts, name, price } = product;
  const { quantity } = salesProducts;

  return (
    <tr>
      <td data-testid={ `${table}item-number-${index}` }>{index + 1}</td>
      <td data-testid={ `${table}name-${index}` }>{name}</td>
      <td data-testid={ `${table}quantity-${index}` }>{`${quantity}`}</td>
      <td
        data-testid={ `${table}unit-price-${index}` }
      >
        {Number(price).toFixed(2).replace(/\./, ',')}
      </td>
      <td
        data-testid={ `${table}sub-total-${index}` }
      >
        {`${(quantity * price).toFixed(2)}`.replace(/\./, ',')}
      </td>
    </tr>
  );
}

export default SellerProductRow;

SellerProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    salesProducts: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};
