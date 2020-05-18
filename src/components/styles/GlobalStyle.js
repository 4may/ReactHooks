import { createGlobalStyle } from 'styled-components'

//``のなかは、CSSで記述する。
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  body{
    font-size : 10px;
    font-family : 'Hind', sans-serif;
  }
`;

export default GlobalStyle