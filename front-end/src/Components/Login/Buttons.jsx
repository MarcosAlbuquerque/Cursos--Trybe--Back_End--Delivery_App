import React from 'react';

const Buttons = () => (
  <div>
    <button
      type="button"
      data-testid="common_login__button-login"
    >
      LOGIN
    </button>

    <button
      type="button"
      data-testid="common_login__button-register"
    >
      Ainda nao tenho conta
    </button>
  </div>
);

export default Buttons;
