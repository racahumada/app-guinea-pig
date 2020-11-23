import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signOut } from '../../config/auth.js';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleLogout = () => {
    signOut();
  };

  //Estrutura de links das páginas raiz e signup
  const linksHome = (
    <>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/signup">Registre-se</Link>
      </li>
    </>
  );

  //Estrutura de links da página dashboard
  const linksDash = (
    <>
      <li>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="container">
        <Link to="/" className="title">
          GUINEA APP
        </Link>
        <nav className="navbar">
          <ul>
            {(location.pathname === '/' || location.pathname === '/signup') &&
              linksHome}
            {location.pathname === '/dashboard' && linksDash}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
