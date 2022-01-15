import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../Utils/formatDate';

function OrderCard({ orderInfo }) {
  const navigate = useNavigate();

  const prefix = 'seller_orders__element-';
  const { id: orderId,
    saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = orderInfo;

  function goToOrderDetails(id) {
    navigate(`/seller/orders/${id}`);
  }

  return (
    <div
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/566011b89df811b95bc4e99799a5ea03d440411d/docs/rules/interactive-supports-focus.md
      onClick={ () => goToOrderDetails(orderId) }
      onKeyPress={ () => goToOrderDetails() }
      tabIndex={ 0 }
      role="button"
    >
      <div data-testid={ `${prefix}order-id-${orderId}` }>{`Pedido N. ${orderId}`}</div>
      <div
        data-testid={ `${prefix}order-date-${orderId}` }
      >
        {`Data: ${formatDate(saleDate)}`}
      </div>
      <div
        data-testid={ `${prefix}delivery-status-${orderId}` }
      >
        {`Status: ${status}`}
      </div>
      <div data-testid={ `${prefix}card-price-${orderId}` }>{`Total: ${totalPrice}`}</div>
      <div
        data-testid={ `${prefix}card-address-${orderId}` }
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
