import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_SALE_DETAILS } from '../Api';
import useAxios from '../Hooks/useAxios';
import NavBar from '../Components/Products/NavBar';
import HeaderTable from '../Components/OrderDetails/HeaderTable';

const table = 'customer_order_details__element-order-table';
const details = 'customer_order_details__element-order-details-label-';

function OrderDetails() {
  const [orderProducts, setOrderProducts] = React.useState([]);

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const { request } = useAxios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const options = GET_SALE_DETAILS(id);
    const response = await request(options);

    console.log(response);
  }, [id, request]);

  const renderOrderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descricao</th>
          <th>Quantidade</th>
          <th>Preco unitario</th>
          <th>Sub-total</th>
        </tr>
        {
          cart.map(({ name, price, productQnt }, i) => (
            <tr key={ name }>
              <td data-testid={ `${table}table-item-number-${i}` }>{i + 1}</td>
              <td data-testid={ `${table}name-${i}` }>{name}</td>
              <td data-testid={ `${table}quantity-${i}` }>{productQnt}</td>
              <td
                data-testid={ `${table}unit-price-${i}` }
              >
                {Number(price).toFixed(2).replace(/\./, ',')}
              </td>
              <td
                data-testid={ `${table}sub-total-${i}` }
              >
                {`${(productQnt * price).toFixed(2)}`.replace(/\./, ',')}
              </td>
            </tr>
          ))
        }
      </thead>
    </table>
  );

  return (
    <div>
      <NavBar user={ currentUser } />
      <HeaderTable />
      <p>Total price</p>
    </div>
  );
}

export default OrderDetails;
