import React from 'react';

const arraySales = [
  { id: 1, status: 'pendente', data: '20/03/2019', valor: '32.12' },
  { id: 2, status: 'pendente', data: '11/02/2020', valor: '32.12' },
  { id: 3, status: 'pendente', data: '15/11/2021', valor: '32.12' },
  { id: 4, status: 'pendente', data: '02/05/2022', valor: '32.12' },
];

const CustomerOrders = () => {
  const [sales] = React.useState(arraySales);

  // console.log({ shoppingCart });
  // eslint-disable-next-line no-magic-numbers

  return (
    <section>
      {sales.map((item, i) => (
        <div key={ i }>
          <div>
            <strong>Pedido</strong>
            <p data-testid={ `"customer_orders__element-order-id-${item.id}"` }>
              {`00${item.id}`}
            </p>
          </div>
          <div data-testid={ `"customer_orders__element-delivery-status-${item.id}"` }>
            {item.status}
          </div>
          <div>
            <span data-testid={ `"customer_orders__element-order-date-${item.id}"` }>
              {item.data}
            </span>
            <span data-testid={ `"customer_orders__element-card-price-${item.id}"` }>
              {item.valor}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CustomerOrders;
