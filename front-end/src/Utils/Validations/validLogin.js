import jwt from 'jsonwebtoken';

const thousandNumber = 1000;

function validLogin() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));

  if (!loggedUser) return false;

  const decoded = jwt.decode(loggedUser.token);
  const currentTime = Date.now() / thousandNumber;

  if (decoded.exp < currentTime) return false;

  return true;
}

export default validLogin;
