import React from 'react';
import emailValidation from '../../Utils/Validations/emailValidation';
import passwordValidation from '../../Utils/Validations/passwordValidation';

const Forms = () => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const [validCredentials, setValidCredentials] = React.useState(false);

  const handleCredentials = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  React.useEffect(() => {
    const { email, password } = credentials;
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password),
    );
  }, [credentials]);

  return (
    <form>
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
        {console.log(!validCredentials)}
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda nao tenho conta
      </button>
    </form>
  );
};

export default Forms;
