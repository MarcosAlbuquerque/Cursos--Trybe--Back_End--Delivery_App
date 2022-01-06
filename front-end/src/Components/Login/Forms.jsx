import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailValidation from '../../Utils/Validations/emailValidation';
import passwordValidation from '../../Utils/Validations/passwordValidation';

const Forms = () => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  // const [errorMessage, setErrorMessage] = React.useState(false);

  const [validCredentials, setValidCredentials] = React.useState(false);

  const handleCredentials = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const requestLogin = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/login', {
      email: credentials.email,
      password: credentials.password,
    })
      .then((response) => console.log({ response }))
      .catch((error) => console.log({ error }));
  };

  React.useEffect(() => {
    const { email, password } = credentials;
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password),
    );
  }, [credentials]);

  return (
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
    // Messagem de erro devera ficar aqui devido ao estado local
  );
};

export default Forms;
