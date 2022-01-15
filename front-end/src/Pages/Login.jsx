import React from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from '../Components/Login/Forms';
import Logo from '../Components/Login/Logo';

function Login() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.role === 'customer') {
      console.log(user);
      navigate('/customer/products');
    }
  }, []);

  return (
    <div>
      <Logo />
      <Forms />
    </div>
  );
}

export default Login;
