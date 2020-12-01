import styled from 'styled-components';

export const SubNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.subnav};
`;
