import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;

  }

  #root {
    margin: 0 auto;
    padding-bottom:8rem;

  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Roboto Slab',serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
