import React from 'react';
import { useLocation } from 'react-router-dom';
import { WrapperNavbar, LinkPdi } from './style';

// const regexSubNav = (value) => {
//   const regLocation = /\/pdi/;
//   const resultRegex = regLocation.exec(value);
//   console.log(resultRegex);
//   return resultRegex;
// };
const subPage = (value) => {
  const [, , local] = value.split('/');
  return local;
};

const DashSubMenu = () => {
  let location = useLocation();

  const LinksPdi = (
    <LinkPdi to="/dashboard/pdi/add">
      <i className="fas fa-plus"></i>
      <span>Add</span>
    </LinkPdi>
  );

  return (
    // <WrapperNavbar>{regexSubNav(location.pathname) && LinksPdi}</WrapperNavbar>
    <WrapperNavbar>
      {subPage(location.pathname) === 'pdi' && LinksPdi}
    </WrapperNavbar>
  );
};

export default DashSubMenu;
