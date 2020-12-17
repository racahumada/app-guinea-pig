import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Panel = styled.div`
  background-color: ${({ theme }) => theme.primary.panel};
`;

export const WrapperPanel = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const LinkPanel = styled(Link)`
  background-color: ${({ theme }) => theme.primary.btnDarkBg};
  color: ${({ theme }) => theme.primary.btnLightTx};
  text-decoration: none;
  padding: 0.8rem 3rem;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primary.btnLightTx};
    color: ${({ theme }) => theme.primary.btnDarkBg};
  }
`;
