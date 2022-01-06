import React from 'react';
import { Link } from 'react-router-dom';
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
  const [errorMessage, setErrorMessage] = React.useState(false);

  const [validCredentials, setValidCredentials] = React.useState(false);

  const { request, error } = useAxios; 

  const handleCredentials = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const requestLogin = async (e) => {
    e.preventDefault();
      const { url, options } = LOGIN(credentials);
      const { response } = await request(url, options);
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
    </>
  );
};

export default Forms;
