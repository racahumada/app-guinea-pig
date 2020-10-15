import React from 'react';
import { Link } from 'react-router-dom';
import css from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.navContainer}>
      <nav className={css.navbar}>
        <Link to="/">GUINEA APP</Link>
        <ul>
          <li>
            <Link to="/signup">Registre-se</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
