import React from 'react';
import { Route } from 'react-router-dom';
import { DashSubMenu, FormAddPdi, Wrapper } from '../index';

const WrapperPdi = () => {
  return (
    <Wrapper>
      <DashSubMenu />
      <Route exact path="/dashboard/pdi/add">
        <FormAddPdi />
      </Route>
    </Wrapper>
  );
};

export default WrapperPdi;
