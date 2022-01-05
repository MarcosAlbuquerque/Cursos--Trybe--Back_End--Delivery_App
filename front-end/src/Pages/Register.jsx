import React, { useState } from 'react';

const stateInitial = {
  name: '',
  email: '',
  password: '',
};

function Register() {
  const [stateRegister, setStateRegister] = useState(stateInitial);

  const prefixo = 'common_register__';

  return (
    <>
      <h2>Cadastro</h2>
      <form method="post">
        <label htmlFor="Nome">
          Nome:
          <input
            name="name"
            value={ stateRegister.name }
            data-testid={ `${prefixo}input-name` }
            type="text"
            required
            onChange={ ({ target }) => setStateRegister({
              ...stateRegister, name: target.value,
            }) }
          />
        </label>
        <label htmlFor="Email">
          Email:
          <input
            name="email"
            value={ stateRegister.email }
            data-testid={ `${prefixo}input-email` }
            type="text"
            required
            onChange={ ({ target }) => setStateRegister({
              ...stateRegister, email: target.value,
            }) }
          />
        </label>
        <label htmlFor="Password">
          Senha:
          <input
            name="password"
            value={ stateRegister.password }
            data-testid={ `${prefixo}input-password` }
            type="text"
            required
            onChange={ ({ target }) => setStateRegister({
              ...stateRegister, password: target.value,
            }) }
          />
        </label>
        <button
          type="submit"
          data-testid={ `${prefixo}button-register` }
        >
          CADASTRAR
        </button>
        <div data-testid={ `${prefixo}element-invalid_register` }>
          Dados Incorretos
        </div>
      </form>
    </>
  );
}

export default Register;
