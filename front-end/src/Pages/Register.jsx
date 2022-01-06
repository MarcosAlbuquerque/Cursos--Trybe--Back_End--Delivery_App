import React from 'react';
import emailValidation from '../Utils/Validations/emailValidation';
import passwordValidation from '../Utils/Validations/passwordValidation';
import nameValidation from '../Utils/Validations/nameValidation';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validCredentials, setValidCredentials] = React.useState(false);

  const prefixo = 'common_register__';

  const requestSubmit = async (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password)
      && nameValidation(name),
    );
  }, [name, email, password]);

  return (
    <>
      <h2>Cadastro</h2>
      <form onSubmit={ (e) => requestSubmit(e) }>
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            data-testid={ `${prefixo}input-name` }
            type="text"
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            data-testid={ `${prefixo}input-email` }
            type="email"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            data-testid={ `${prefixo}input-password` }
            type="password"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          data-testid={ `${prefixo}button-register` }
          disabled={ !validCredentials }
        >
          CADASTRAR
        </button>
        <div data-testid={ `${prefixo}element-invalid_register` }>Dados Incorretos</div>
      </form>
    </>
  );
}

export default Register;
