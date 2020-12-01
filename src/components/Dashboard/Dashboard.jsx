import React from 'react';
import { Route } from 'react-router-dom';
import DashPanel from './DashPanel/DashPanel';
import { isAuth } from '../../config/auth.js';
import { WrapperMain } from './style';
import WrapperPdi from './WrapperPdi/WrapperPdi';

const Dashboard = () => {
  return isAuth ? (
    <>
      <DashPanel />
      <WrapperMain>
        <Route exact path="/dashboard">
          <h1>Dash Home</h1>
        </Route>
        <Route path="/dashboard/pdi">
          <WrapperPdi />
        </Route>
        <Route path="/dashboard/alimentacao">
          <h1>Dash Alimentação</h1>
        </Route>
        <Route path="/dashboard/saude">
          <h1>Dash Saúde</h1>
        </Route>
        <Route path="/dashboard/estetica">
          <h1>Dash Estética</h1>
        </Route>
        <Route path="/dashboard/cercado">
          <h1>Dash Cercado</h1>
        </Route>
      </WrapperMain>
    </>
  ) : (
    <p>Não esta logado</p>
  );
};

export default Dashboard;
