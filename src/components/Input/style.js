import styled from 'styled-components';

export const InputForm = styled.input`
  padding: 5px;
  height: 3rem;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary.principal};
`;
