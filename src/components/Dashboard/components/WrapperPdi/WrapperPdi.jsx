import React from 'react';
import { Route } from 'react-router-dom';
import { Wrapper } from '../Wrapper/style';
import { SubNavbar } from '../Subnavbar/SubNavbar';
import FormAddPdi from './components/FormAddPdi/FormAddPdi';

const WrapperPdi = () => {
  return (
    <Wrapper>
      <SubNavbar />
      <Route exact path="/dashboard/pdi/add">
        <FormAddPdi />
      </Route>
    </Wrapper>
  );
};

export default WrapperPdi;
