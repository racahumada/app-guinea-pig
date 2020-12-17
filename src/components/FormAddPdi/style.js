import styled from 'styled-components';

export const WrapperForm = styled.div`
  width: 800px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.h3`
  text-align: center;
`;

export const BoxForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;

  & span {
    color: ${({ theme }) => theme.primary.alert};
    margin-bottom: 20px;
  }
`;

export const LabelForm = styled.label`
  margin-bottom: 10px;
`;

export const InputForm = styled.input`
  padding: 5px;
  height: 3rem;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary.principal};
`;

export const SelectForm = styled.select`
  padding: 5px;
  height: 3rem;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary.principal};
`;
