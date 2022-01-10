import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Products/NavBar';
import ProductList from '../Components/Products/ProductList';
import { CartStorage } from '../CartContext';
import validLogin from '../Utils/Validations/validLogin';

const Products = () => {
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
  }, []);

  return (
    isLogged && (
      <div>
        <NavBar user={ currentUser } />
        <CartStorage>
          <ProductList />
          { /* <ShopCartButton /> */ }
        </CartStorage>
      </div>
    )
  );
};

export default Products;
