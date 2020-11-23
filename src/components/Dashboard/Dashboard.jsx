import React from 'react';
import DashPanel from '../dashpanel/DashPanel';
import { isAuth } from '../../config/auth.js';
import './dashboard.css';

const Dashboard = () => {
  return isAuth ? (
    <div className="dashContainer">
      <DashPanel />
    </div>
  ) : (
    <p>Não esta logado</p>
  );
};

export default Dashboard;
