import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Products/NavBar';
import ProductList from '../Components/Products/ProductList';
import validLogin from '../Utils/Validations/validLogin';

const Products = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!currentUser && !validLogin()) {
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
        <ProductList />
        { /* <ShopCartButton /> */ }
      </div>
    )
  );
};

export default Products;
