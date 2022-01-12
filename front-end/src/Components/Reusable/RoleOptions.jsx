import React from 'react';

const UserOptions = ({ role }) => {
  const prefix = 'customer_products__';

  const customerOptions = (
    <div>
      <button type="button" data-testid={ `${prefix}element-navbar-link-products` }>
        Produtos
      </button>
      <button type="button" data-testid={ `${prefix}element-navbar-link-orders` }>
        Meus pedidos
      </button>
    </div>
  );

  const adminOptions = (
    <div>
      <button
        type="button"
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        Gerenciar usuarios
      </button>
    </div>
  );
  const sellerOptions = (
    <div>
      <button
        type="button"
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        Pedidos
      </button>
    </div>
  );

  switch (role) {
  case 'administrator':
    return adminOptions;
  case 'seller':
    return sellerOptions;
  default:
    return customerOptions;
  }
};

export default UserOptions;
