import React, { useContext, useEffect, useCallback } from 'react';
import { Route } from 'react-router-dom';
import { DashMenu, WrapperPdi } from '../../components';
import { isAuth } from '../../config/auth.js';
import { WrapperMain } from './style';
import { AuthContext } from '../../providers/auth/authContext';

const Dashboard = () => {
  const { user, refreshGetStorage } = useContext(AuthContext);

  const ifRefresh = useCallback(() => {
    if (user.name === null) {
      refreshGetStorage(isAuth());
    }
  }, [user, refreshGetStorage]);

  useEffect(() => {
    ifRefresh();
  });

  console.log('Dashboard', user);

  return isAuth ? (
    <>
      <DashMenu />
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
