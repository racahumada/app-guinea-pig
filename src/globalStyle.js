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


`;
