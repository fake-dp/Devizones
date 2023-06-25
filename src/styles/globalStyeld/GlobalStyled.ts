import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset */
  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }

  /* 한글 폰트 */
  /* @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: local('Noto Sans KR'), local('NotoSansKR-Regular'), url(https://fonts.gstatic.com/s/notosanskr/v12/PbykFmXiEBPT4ITbgNA5CgmOsn7u.woff2) format('woff2');
    unicode-range: U+AC00-D7AF;
  } */

  /* 영문 폰트 */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v15/zhcz-_WihjSQC0oHJ9TCYAzyDMXhdD8sAj6OAJTFsBI.woff2) format('woff2');
    unicode-range: U+0020-007F;
  }

  html, body, button {
    font-family: 'Noto Sans KR', 'Montserrat', sans-serif;
    background: ${(props) => props.theme.background};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
