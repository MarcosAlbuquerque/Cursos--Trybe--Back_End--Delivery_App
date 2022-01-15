import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../Utils/formatDate';

const details = 'customer_order_details__element-order-details-label-';

function HeaderTable({ orderInfo }) {
  const { saleId, sellerName, saleDate, status } = orderInfo;
  return (
    <div>
      <h2>Detalhes do pedido</h2>
      <div data-testid={ `${details}order-id` }>{`Pedido N. ${saleId}`}</div>
      <div data-testid={ `${details}seller-name` }>{`P. Vend: ${sellerName}`}</div>
      <div data-testid={ `${details}order-date` }>{`Data: ${formatDate(saleDate)}`}</div>
      <div data-testid={ `${details}delivery-status` }>{`Status: ${status}`}</div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status !== 'Em Trânsito' }
      >
        Confirmar recebimento
      </button>
    </div>
  );
}

export default HeaderTable;

HeaderTable.propTypes = {
  orderInfo: PropTypes.shape({
    saleId: PropTypes.number.isRequired,
    sellerName: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
