import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {box-sizing: border-box; font-family: var(--font-montserrat); letter-spacing: -0.05em; line-height: 1.4;}
  button {border: none;}
  li {list-style: none;}
  img {display:block; width: 100%;}
  a {color:inherit; text-decoration: none;}
`;
export default GlobalStyles;
