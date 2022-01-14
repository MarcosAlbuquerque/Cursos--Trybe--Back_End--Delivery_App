import React from 'react';

function HeaderTable() {
  return (
    <div>
      <h2>Detalhes do pedido</h2>
      <div data-testid={ `${details}label-order-id` }>Pedido N.</div>
      <div data-testid={ `${details}label-seller-name` }>P. Vend:</div>
      <div data-testid={ `${details}label-order-date` }>Data:</div>
      <div data-testid={ `${details}delivery-status` }>Status:</div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Confirmar recebimento
      </button>
    </div>
  );
}

export default HeaderTable;
