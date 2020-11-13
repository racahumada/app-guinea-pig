import React from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth, signOut } from '../config/auth.js';
import css from './dashboard.module.css';

const Dashboard = () => {
  const history = useHistory();

  const handleLogOut = () => {
    signOut();
    history.push('/');
  };

  return isAuth ? (
    <div className={css.dashContainer}>
      <p>Logado</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  ) : (
    <p>Não esta logado</p>
  );
};

export default Dashboard;
