import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Panel = styled.div`
  background-color: ${(props) => props.theme.panel};
`;

export const WrapperPanel = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const LinkPanel = styled(Link)`
  background-color: ${(props) => props.theme.btnLightBg};
  color: ${(props) => props.theme.btnLightTx};
  text-decoration: none;
  padding: 0.8rem 3rem;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.btnLightTx};
    color: ${(props) => props.theme.btnLightBg};
  }
`;
