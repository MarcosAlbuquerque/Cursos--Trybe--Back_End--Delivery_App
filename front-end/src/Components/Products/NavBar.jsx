import React from 'react';
import { PropTypes } from 'prop-types';
import RoleOptions from '../Reusable/RoleOptions';

const prefix = 'customer_products__';

const NavBar = ({ user }) => {
  const { role, name } = user;
  return (
    <nav>
      <RoleOptions role={ role } />
      <div>
        <button
          type="button"
          data-testid={ `${prefix}element-navbar-user-full-name` }
        >
          { name }
        </button>
        <button
          type="button"
          data-testid={ `${prefix}element-navbar-link-logout` }
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};
