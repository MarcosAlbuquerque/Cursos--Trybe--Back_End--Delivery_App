import React from 'react';
import { Navigate } from 'react-router-dom';
import emailValidation from '../Utils/Validations/emailValidation';
import passwordValidation from '../Utils/Validations/passwordValidation';
import nameValidation from '../Utils/Validations/nameValidation';
import { REGISTER } from '../Api';
import useAxios from '../Hooks/useAxios';
import HiddenMessage from '../Components/Register/HiddenMessage';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validCredentials, setValidCredentials] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);

  const { request, error } = useAxios();

  const prefix = 'common_register__';

  const requestSubmit = async (e) => {
    e.preventDefault();
    const options = REGISTER({ name, email, password });
    const response = await request(options);

    if (response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setRegistered(true);
    } else {
      setRegistered(false);
    }
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
            data-testid={ `${prefix}input-name` }
            type="text"
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            data-testid={ `${prefix}input-email` }
            type="email"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            data-testid={ `${prefix}input-password` }
            type="password"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="submit"
          data-testid={ `${prefix}button-register` }
          disabled={ !validCredentials }
        >
          CADASTRAR
        </button>
        { error && <HiddenMessage /> }
      </form>
      { registered && <Navigate to="/customer/products" /> }
    </>
  );
}

export default Register;
