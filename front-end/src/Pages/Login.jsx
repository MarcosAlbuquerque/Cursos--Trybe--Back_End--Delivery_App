import React from 'react';
import Forms from '../Components/Login/Forms';
import Logo from '../Components/Login/Logo';
import HiddenMessage from '../Components/Login/HiddenMessage';

function Login() {
  return (
    <div>
      <Logo />
      <Forms />
      <HiddenMessage />
    </div>
  );
}

export default Login;
