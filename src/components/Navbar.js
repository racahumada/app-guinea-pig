import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="title">
          GUINEA APP
        </Link>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/signup">Registre-se</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
