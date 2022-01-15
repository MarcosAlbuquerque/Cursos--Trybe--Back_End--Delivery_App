import React from 'react';

function OrderCard({ orderInfo, index }) {
  const prefix = 'seller_orders__element-';
  const { saleId, sellerName, saleDate, status, totalPrice } = orderInfo;
  return (
    <div>
      <div data-testid={ `${prefix}order-id-${saleId}` }>{`Pedido N. ${saleId}`}</div>
      <div data-testid={ `${prefix}order-date-${saleId}` }>{`Data: ${formatDate(saleDate)}`}</div>
      <div data-testid={ `${prefix}delivery-status-${saleId}` }>{`Status: ${status}`}</div>
      <div data-testid={ `${prefix}total-price-${saleId}` }>{`Total: ${totalPrice}`}</div>
      <div data-testid={ `${prefix}address-${saleId}` }>{}</div>
    </div>

  // desde que o id do seller seja igual ao id para ser bucado no banco
  );
}

export default OrderCard;
