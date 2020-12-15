import React from 'react';
import { Panel, WrapperPanel, LinkPanel } from './style';

function DashMenu() {
  return (
    <Panel>
      <WrapperPanel>
        <LinkPanel to="/dashboard/">Principal</LinkPanel>
        <LinkPanel to="/dashboard/pdi">PDI</LinkPanel>
        <LinkPanel to="/dashboard/alimentacao">Alimentação</LinkPanel>
        <LinkPanel to="/dashboard/saude">Sa�de</LinkPanel>
        <LinkPanel to="/dashboard/estetica">Estética</LinkPanel>
        <LinkPanel to="/dashboard/cercado">Cercado</LinkPanel>
      </WrapperPanel>
    </Panel>
  );
}

export default DashMenu;
