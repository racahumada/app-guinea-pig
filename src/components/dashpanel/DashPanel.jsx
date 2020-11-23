import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import color from '../../config/theme';

const Panel = styled.div`
  background-color: ${color.panel};
`;

const WrapperPanel = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const LinkPanel = styled(Link)`
  background-color: ${color.btnLightBg};
  color: ${color.btnLightTx};
  text-decoration: none;
  padding: 0.8rem 3rem;
  transition: 0.3s;
  &:hover {
    background-color: ${color.btnLightTx};
    color: ${color.btnLightBg};
  }
`;

export default function DashPanel() {
  return (
    <Panel>
      <WrapperPanel>
        <LinkPanel to="/dashboard/">Principal</LinkPanel>
        <LinkPanel to="/dashboard/pdi">PDI</LinkPanel>
        <LinkPanel to="/dashboard/alimentacao">Alimentação</LinkPanel>
        <LinkPanel to="/dashboard/saude">Saúde</LinkPanel>
        <LinkPanel to="/dashboard/estetica">Estética</LinkPanel>
        <LinkPanel to="/dashboard/cercado">Cercado</LinkPanel>
      </WrapperPanel>
    </Panel>
  );
}
