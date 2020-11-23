import React from 'react';
import { isAuth } from '../../config/auth.js';
import './dashboard.css';

const Dashboard = () => {
  return isAuth ? (
    <div className="dashContainer">Logado</div>
  ) : (
    <p>Não esta logado</p>
  );
};

export default Dashboard;
