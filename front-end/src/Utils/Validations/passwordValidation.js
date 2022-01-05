export default function (userPassword) {
  const minimumPasswordLength = 6;
  return userPassword.length >= minimumPasswordLength;
}
