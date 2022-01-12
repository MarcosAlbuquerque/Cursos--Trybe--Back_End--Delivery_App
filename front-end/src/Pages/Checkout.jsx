import React from 'react';
import NavBar from '../Components/Products/NavBar';

const Checkout = () => {
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  console.log(address);
  console.log(number);

  const prefix = 'customer_checkout__element-order-table-';

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const totalSum = localStorage.getItem('totalSum');

  return (
    <div>
      <NavBar user={ currentUser } />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricao</th>
            <th>Quantidade</th>
            <th>Preco unitario</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
          {
            shoppingCart.map(({ name, price, productQnt }, i) => (
              <tr key={ name }>
                <td data-testid={ `${prefix}item-number-${i}` }>{i + 1}</td>
                <td data-testid={ `${prefix}name-${i}` }>{name}</td>
                <td data-testid={ `${prefix}quantity-${i}` }>{productQnt}</td>
                <td
                  data-testid={ `${prefix}unit-price-${i}` }
                >
                  {Number(price).toFixed(2).replace(/\./, ',')}
                </td>
                <td
                  data-testid={ `${prefix}sub-total-${i}` }
                >
                  {`${(productQnt * price).toFixed(2)}`.replace(/\./, ',')}
                </td>
                <td data-testid={ `${prefix}remove-${i}` }>
                  <button type="button">Remover</button>
                </td>
              </tr>
            ))
          }
        </thead>
      </table>

      <h3>
        Total R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {totalSum}
        </span>
      </h3>

      <form>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="sellers">
          P. vendedora responsavel
          <select
            data-testid="customer_checkout__select-seller"
            name="sellers"
            id="sellers"
          >
            <option value="pendente">pendente</option>
          </select>
        </label>

        <label htmlFor="customer-address">
          Endereço
          <input
            id="customer-address"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setAddress(e.target.value) }
          />
        </label>

        <label htmlFor="customer-number">
          Número
          <input
            id="customer-number"
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
