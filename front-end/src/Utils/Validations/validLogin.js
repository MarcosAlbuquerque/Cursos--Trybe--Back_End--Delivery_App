import jwt from 'jsonwebtoken';

function validLogin() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));

  if (!loggedUser) return false;

  try {
    jwt.verify(loggedUser.token, 'secret_key');
    return true;
  } catch (error) {
    return false;
  }
}

export default validLogin;
