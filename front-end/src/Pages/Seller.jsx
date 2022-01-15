import React from 'react';
// import RoleOptions from '../Components/Reusable/RoleOptions';
import NavBar from '../Components/Products/NavBar';

function Seller() {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {}, []);

  return (
    <div>
      <NavBar user={ currentUser } />
      {/* <RoleOptions role="seller" /> */}
    </div>
    // <h1>Seller</h1>
  );
}

export default Seller;
