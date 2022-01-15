function formatDate(date) {
  const dateStringLength = 10;
  let formatedDate = '';
  for (let i = 0; i < dateStringLength; i += 1) {
    formatedDate += date[i];
  }

  formatedDate = formatedDate.split('-').reverse().join('/');
  return formatedDate;
}
export default formatDate;
