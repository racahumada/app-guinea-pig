import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #root {
    font-size: 16px;
    color: #708090;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;
