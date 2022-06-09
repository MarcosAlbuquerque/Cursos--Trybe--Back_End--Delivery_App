import React from 'react';
import Form from '../Components/Administrator/Form';
import NavBar from '../Components/Products/NavBar';

function Administrator() {
  const currentRole = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <NavBar user={ currentRole } />
      <Form />
    </div>
  );
}

export default Administrator;
