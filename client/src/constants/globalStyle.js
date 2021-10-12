import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize};


body {
    background-color: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.mainText};
    font-weight: 500;
    padding: 0;
    line-height: 1.6;
  }
  h2{
    font-size:1.65rem;
  }
  h1{
   color: ${({ theme }) => theme.btnText};
   font-weight: 600;
  }
`;

export default GlobalStyle;
