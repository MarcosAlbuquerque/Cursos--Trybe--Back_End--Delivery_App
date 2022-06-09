/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import NavBar from '../Components/Products/NavBar';
import OrderCard from '../Components/Seller/OrderCard';
import { GET_ORDERS_BY_SELLER } from '../Api';
import useAxios from '../Hooks/useAxios';

function Seller() {
  const { request } = useAxios();
  const [orders, setOrders] = React.useState([]);

  const currentUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(async () => {
    const options = GET_ORDERS_BY_SELLER(currentUser.id);
    const result = await request(options);
    const { sales } = result.data.success;
    setOrders(sales);
  }, []);

  return (
    <div>
      <NavBar user={ currentUser } />
      <h1>P. Vendedora</h1>
      <div>
        { orders.map((order, i) => <OrderCard key={ i } orderInfo={ order } />) }
      </div>
    </div>
  );
}

export default Seller;
