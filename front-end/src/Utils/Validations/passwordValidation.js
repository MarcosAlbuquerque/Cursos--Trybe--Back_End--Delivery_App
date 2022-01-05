export default function(userPassword) {
  return userPassword.length >= 6 && !userPassword.includes(' ');
}
