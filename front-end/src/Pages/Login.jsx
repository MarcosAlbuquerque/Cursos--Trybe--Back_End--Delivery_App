import React from 'react';
import Buttons from '../Components/Login/Buttons';
import Forms from '../Components/Login/Forms';
import Logo from '../Components/Login/Logo';
import HiddenMessage from '../Components/Login/HiddenMessage';

function Login() {
  return (
    <div>
      <Logo />
      <Forms />
      <Buttons />
      <HiddenMessage />
    </div>
  );
}

export default Login;
