import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_SALE_DETAILS } from '../Api';
import useAxios from '../Hooks/useAxios';
import NavBar from '../Components/Products/NavBar';
import OrderDescription from '../Components/OrderDetails/OrderDescription';
import ProductRow from '../Components/OrderDetails/ProductRow';

function OrderDetails() {
  const [orderProducts, setOrderProducts] = React.useState([]);
  const [orderInfo, setOrderInfo] = React.useState({
    saleId: '',
    sellerName: '',
    saleDate: '',
    status: '',
  });
  const [value, setTotalValue] = React.useState(0);

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const { request } = useAxios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const options = GET_SALE_DETAILS(id);
    const response = await request(options);

    if (response) {
      const { sale } = response.data.success;

      // Informacoes do vendedor e pedido
      setOrderInfo({
        saleId: sale.id,
        sellerName: sale.seller.name,
        saleDate: sale.saleDate,
        status: sale.status,
      });

      // Array de produtos
      setOrderProducts(sale.products);

      // Seta valor total do pedido
      console.log(sale.totalPrice);
      setTotalValue(sale.totalPrice);
    }

    console.log();
  }, [id, request]);

  return (
    <div>
      <NavBar user={ currentUser } />
      <OrderDescription orderInfo={ orderInfo } />
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
            orderProducts.map((product, i) => (
              <ProductRow key={ i } product={ product } index={ i } />
            ))
          }
        </thead>
      </table>
      <div>
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          {`${parseFloat(value).toFixed(2).replace(/\./, ',')}`}
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
