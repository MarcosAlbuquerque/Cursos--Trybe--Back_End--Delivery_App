import React from 'react';

const Checkout = () => {
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');

  console.log({ address, number });

  return (
    <>
      <div>
        <h2>Finalizar Pedido</h2>
        {/* colocar aqui a lista de produtos */}
        <button
          type="button"
          data-testid="customer_checkout__element-order-total-price"
        >
          Total R$
        </button>
      </div>

      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default Checkout;
