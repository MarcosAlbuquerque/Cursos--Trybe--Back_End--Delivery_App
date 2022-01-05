import React from 'react';

const Forms = () => (
  <form>
    <label htmlFor="email">
      Email:
      <input
        type="email"
        name="email"
        id="email"
        data-testid="common_login__input-email"
      />

    </label>
    <label htmlFor="password">
      Senha:
      <input
        type="password"
        name="password"
        id="password"
        data-testid="common_login__input-password"
      />
    </label>
  </form>
);

export default Forms;
