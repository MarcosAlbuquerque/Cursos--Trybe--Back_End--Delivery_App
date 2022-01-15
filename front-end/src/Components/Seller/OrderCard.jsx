import React from 'react';
import { PropTypes } from 'prop-types';
import formatDate from '../../Utils/formatDate';

function OrderCard({ orderInfo }) {
  const prefix = 'seller_orders__element-';
  const { id, saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = orderInfo;
  return (
    <div>
      <div data-testid={ `${prefix}order-id-${id}` }>{`Pedido N. ${id}`}</div>
      <div
        data-testid={ `${prefix}order-date-${id}` }
      >
        {`Data: ${formatDate(saleDate)}`}
      </div>
      <div
        data-testid={ `${prefix}delivery-status-${id}` }
      >
        {`Status: ${status}`}
      </div>
      <div data-testid={ `${prefix}card-price-${id}` }>{`Total: ${totalPrice}`}</div>
      <div
        data-testid={ `${prefix}card-address-${id}` }
      >
        {`${deliveryAddress}, ${deliveryNumber}`}
      </div>
    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  orderInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};
