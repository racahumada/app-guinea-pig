import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import DashPanel from '../dashpanel/DashPanel';
import { isAuth } from '../../config/auth.js';

const WrapperMain = styled.main`
  width: 70vw;
  min-height: 800px;
  margin: 0 auto;
  background-color: #c3c3c3;
`;

const Dashboard = () => {
  return isAuth ? (
    <>
      <DashPanel />
      <WrapperMain>
        <Router>
          <Switch>
            <Route path="/dashboard/pdi">
              <h1>Dash PDI</h1>
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
            <Route path="/dashboard">
              <h1>Dash Home</h1>
            </Route>
          </Switch>
        </Router>
      </WrapperMain>
    </>
  ) : (
    <p>Não esta logado</p>
  );
};

export default Dashboard;
