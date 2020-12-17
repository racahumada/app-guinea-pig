import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary.subnav};
`;

export const LinkPdi = styled(Link)`
  background-color: ${({ theme }) => theme.primary.subnav};
  color: ${({ theme }) => theme.primary.btnLightTx};
  text-decoration: none;
  padding: 0.5rem 2rem;
  transition: 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.primary.btnLightTx};
    color: ${({ theme }) => theme.primary.subnav};
  }

  & span {
    margin-left: 0.5rem;
  }
`;
