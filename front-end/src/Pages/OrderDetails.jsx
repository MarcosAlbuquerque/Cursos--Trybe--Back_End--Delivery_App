import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/Products/NavBar';

function OrderDetails() {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div>
      <NavBar user={ currentUser } />
    </div>
  );
}

export default OrderDetails;
