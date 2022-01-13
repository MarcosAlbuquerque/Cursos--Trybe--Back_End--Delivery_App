/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { GET_SELLERS, MAKE_SALE } from '../Api';
import useAxios from '../Hooks/useAxios';
import NavBar from '../Components/Products/NavBar';

const Checkout = () => {
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [deliveryNumber, setDeliveryNumber] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [seller, setSeller] = React.useState([]);
  const [sellerId, setSellerId] = React.useState(null);

  const { request } = useAxios();
  // const navigate = useNavigate();

  React.useEffect(() => {
    // Puxa do localStorage
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setCart(shoppingCart);

    // Insere total no useState
    const totalSum = localStorage.getItem('totalSum');
    setTotal(totalSum);
  }, []);

  const getAllSellers = async () => {
    const options = GET_SELLERS();
    const response = await request(options);
    setSeller(response.data);
  };

  React.useEffect(async () => {
    await getAllSellers();
  }, []);

  const prefix = 'customer_checkout__element-order-table-';

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const removeItem = (id) => {
    const newShoppingCart = cart.filter((item) => item.id !== id);
    setCart(newShoppingCart);

    const newTotalValue = newShoppingCart.reduce((acc, curr) => {
      acc += curr.price * curr.productQnt;
      return acc;
    }, 0);
    console.log(newTotalValue);
    setTotal(newTotalValue.toFixed(2).replace(/\./, ','));
  };

  const makeSale = async () => {
    const body = {
      userId: currentUser.id,
      sellerId: Number(sellerId),
      products: cart,
      deliveryNumber,
      deliveryAddress,
      totalPrice: total,
    };

    const options = MAKE_SALE(body, currentUser.token);
    const result = await request(options);

    if (result) {
      localStorage.removeItem('shoppingCart');
      localStorage.removeItem('totalSum');
      console.log({ result }, 'lindo result');
      // navigate(`/costumer/orders/${result.data.success.id}`);
    }
    console.log({ result }, 'result faiou');
  };

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
            cart.map(({ id, name, price, productQnt }, i) => (
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
                  <button
                    type="button"
                    onClick={ () => removeItem(id) }
                  >
                    Remover
                  </button>
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
          { total }
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
            onClick={ ({ target }) => setSellerId(target.value) }
          >
            {seller.map((user) => (
              <option
                key={ user.id }
                value={ user.id }
              >
                {user.name}
              </option>))}
          </select>
        </label>

        <label htmlFor="customer-address">
          Endereço
          <input
            id="customer-address"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setDeliveryAddress(e.target.value) }
          />
        </label>

        <label htmlFor="customer-number">
          Número
          <input
            id="customer-number"
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            onChange={ (e) => setDeliveryNumber(e.target.value) }
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => makeSale() }
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
