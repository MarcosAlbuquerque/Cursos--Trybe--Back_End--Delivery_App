import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Products/NavBar';
import CustomerOrders from '../Components/Products/CustomerOrders';
import { CartStorage } from '../CartContext';
import validLogin from '../Utils/Validations/validLogin';

export default function Orders() {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!currentUser || !validLogin()) {
      setIsLogged(false);
      navigate('/');
    } else {
      setIsLogged(true);
    }
  }, [currentUser, navigate]);

  return (
    isLogged && (
      <div>
        <CartStorage>
          <NavBar user={ currentUser } />
          <CustomerOrders userId={ currentUser.id } />
        </CartStorage>
      </div>
    )
  );
}
