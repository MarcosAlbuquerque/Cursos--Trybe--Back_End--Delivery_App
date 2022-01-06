import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LOGIN } from '../../Api';
import useAxios from '../../Hooks/useAxios';
import emailValidation from '../../Utils/Validations/emailValidation';
import passwordValidation from '../../Utils/Validations/passwordValidation';
import HiddenMessage from './HiddenMessage';

const Forms = () => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const [logged, setLogged] = React.useState(false);

  const [validCredentials, setValidCredentials] = React.useState(false);

  const { request, error } = useAxios();

  const handleCredentials = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const requestLogin = async (e) => {
    e.preventDefault();
    const options = LOGIN(credentials);
    const response = await request(options);

    if (response) {
      setLogged(true);
      console.log('deve renderizar');
    } else {
      setLogged(false);
      console.log('nao deve renderizar');
    }

    return response;
  };

  React.useEffect(() => {
    const { email, password } = credentials;
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password),
    );
  }, [credentials]);

  return (
    <>
      <p>zebirita@email.com e senha $#zebirita#$</p>
      <form onSubmit={ (e) => requestLogin(e) }>
        <label htmlFor="email">
          Email:
          <input
            onChange={ (e) => handleCredentials(e) }
            type="email"
            name="email"
            id="email"
            data-testid="common_login__input-email"
          />

        </label>
        <label htmlFor="password">
          Senha:
          <input
            onChange={ (e) => handleCredentials(e) }
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
