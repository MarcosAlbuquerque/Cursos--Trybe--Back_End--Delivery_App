import React from 'react';
import { CREATE_USER } from '../../Api';
import useAxios from '../../Hooks/useAxios';
import emailValidation from '../../Utils/Validations/emailValidation';
import passwordValidation from '../../Utils/Validations/passwordValidation';

const defaultRole = 'Escolha um tipo';

function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState(defaultRole);
  const [validCredentials, setValidCredentials] = React.useState(false);

  const { request } = useAxios();
  const { token } = JSON.parse(localStorage.getItem('user'));

  const createUser = async (e) => {
    e.preventDefault();
    const body = { name, email, password, role };
    const options = CREATE_USER(body, token);
    await request(options);
  };

  React.useEffect(() => {
    setValidCredentials(
      emailValidation(email)
      && passwordValidation(password)
      && role !== defaultRole,
    );
  }, [email, password, role]);

  return (
    <form onSubmit={ (e) => createUser(e) }>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          data-testid="admin_manage__input-name"
          name="nome"
          onBlur={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          data-testid="admin_manage__input-email"
          name="email"
          onBlur={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          type="text"
          data-testid="admin_manage__input-password"
          name="senha"
          onBlur={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label htmlFor="tipo">
        Tipo
        <select
          type="text"
          data-testid="admin_manage__select-role"
          name="tipo"
          onChange={ ({ target }) => setRole(target.value) }
        >
          <option value="default">Escolha um tipo</option>
          <option value="customer">customer</option>
          <option value="seller">seller</option>
          <option value="administrator">administrator</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled={ !validCredentials }
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
