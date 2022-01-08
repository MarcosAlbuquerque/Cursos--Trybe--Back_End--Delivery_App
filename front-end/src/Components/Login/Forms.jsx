import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LOGIN } from '../../Api';
import useAxios from '../../Hooks/useAxios';
import emailValidation from '../../Utils/Validations/emailValidation';
import passwordValidation from '../../Utils/Validations/passwordValidation';
import HiddenMessage from './HiddenMessage';

const Forms = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [logged, setLogged] = React.useState(false);
  const [validCredentials, setValidCredentials] = React.useState(false);

  const { request, error } = useAxios();

  const requestLogin = async (e) => {
    e.preventDefault();
    const options = LOGIN({ email, password });
    const response = await request(options);

    if (response) {
      setLogged(true);
    } else {
      setLogged(false);
    }

    localStorage.setItem('user', JSON.stringify(response.data));

    return response;
  };

  React.useEffect(() => {
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password),
    );
  }, [email, password]);

  return (
    <>
      <p>zebirita@email.com e senha $#zebirita#$</p>
      <form onSubmit={ (e) => requestLogin(e) }>
        <label htmlFor="email">
          Email:
          <input
            onChange={ ({ target: { value } }) => setEmail(value) }
            type="email"
            name="email"
            id="email"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            onChange={ ({ target: { value } }) => setPassword(value) }
            type="password"
            name="password"
            id="password"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !validCredentials }
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda nao tenho conta
          </button>
        </Link>
      </form>
      { error ? <HiddenMessage /> : null }
      { logged && <Navigate to="/customer/products" />}
    </>
  );
};

export default Forms;
