import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = (global: any): React.ReactElement | null => (
  <Global
    styles={css`
      @media screen and (max-width: 767px) {
        html {
          font-size: 40%;
        }
      }

      h1 {
        font-size: 8.3rem;
        font-weight: 700;
      }

      h2 {
        font-size: 4.8rem;
        font-weight: 500;
      }

      h3 {
        font-size: 18px;
        font-weight: 100;
      }

      h4 {
        font-size: 15px;
        font-weight: 100;
      }

      div {
        font-size: 18px;
        font-weight: 100;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        text-align: center;
        word-break: keep-all;
        color: ${global.styles.mainColor};
        background-color: ${global.styles.bgColor};
        background: black; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          ${global.styles.gradient}
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          ${global.styles.gradient}
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 1 */
      }
    `}
  />
);

export default GlobalStyle;
