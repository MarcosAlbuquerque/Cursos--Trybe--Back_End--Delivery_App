/* eslint-disable no-magic-numbers */
function formatDate(date) {
  console.log(date);
  let formatedDate = '';
  for (let i = 0; i <= 9; i += 1) {
    formatedDate += date[i];
  }

  formatedDate = formatedDate.split('-').reverse().join('/');
  return formatedDate;
}
export default formatDate;
