import React from 'react';

const UserOptions = ({ role }) => {
  const prefix = 'customer_products__';

  const custumerOptions = (
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
  case 'admininstrator':
    return adminOptions;
  case 'seller':
    return sellerOptions;
  default:
    return custumerOptions;
  }
};

export default UserOptions;
