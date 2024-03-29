import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(0, 0%, 0%);
    font-family: sans-serif;
    font-size: large;
    /* margin: 0; */
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}

  
`;

export default GlobalStyles;
