import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { AuthContext } from '../../providers/auth/authContext.js';

//Verificando de existe "/dashboard/" no exdere?o
const regexDash = (value) => {
  const regexDash = /\/dashboard\//;
  const resultRegex = regexDash.exec(value);
  return resultRegex;
};

const Header = () => {
  const location = useLocation();
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
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
            {(location.pathname === '/dashboard' ||
              regexDash(location.pathname)) &&
              linksDash}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
