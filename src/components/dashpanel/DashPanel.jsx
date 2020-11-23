import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function dashPanel() {
  return (
    <>
      <Link to="/dashboard/pdi">PDI</Link>
      <Link to="/dashboard/saude">Saúde</Link>
    </>
  );
}
