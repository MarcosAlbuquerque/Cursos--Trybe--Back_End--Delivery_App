import jwt from 'jsonwebtoken';

function validLogin() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));

  if (!loggedUser) return false;

  try {
    /** Aqui pode ser feita uma requisicao para o backend mandao o token
    // e verifica se o token esta valido */
    jwt.verify(loggedUser.token, 'supersecret_key');
    return true;
  } catch (error) {
    return false;
  }
}

export default validLogin;
