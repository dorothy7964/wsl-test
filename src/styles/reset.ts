import { injectGlobal } from '@emotion/css';

/* 
  http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/
const reset = injectGlobal`
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Noto Sans CJK KR'),
    url("fonts/NotoSansKR-Light.woff2") format('woff2'),
    url("fonts/NotoSansKR-Light.woff") format('woff'),
    url("fonts/NotoSansKR-Light.otf") format('truetype'),
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Noto Sans CJK KR'),
    url("fonts/NotoSansKR-Regular.woff2") format('woff2'),
    url("fonts/NotoSansKR-Regular.woff") format('woff'),
    url("fonts/NotoSansKR-Regular.otf") format('truetype')
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Noto Sans CJK KR'),
    url("fonts/NotoSansKR-Medium.woff2") format('woff2'),
    url("fonts/NotoSansKR-Medium.woff") format('woff'),
    url("fonts/NotoSansKR-Medium.otf") format('truetype')
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Noto Sans CJK KR'),
    url("fonts/NotoSansKR-Bold.woff2") format('woff2'),
    url("fonts/NotoSansKR-Bold.woff") format('woff'),
    url("fonts/NotoSansKR-Bold.otf") format('truetype')
  }

/* 
  font-size: 62.5% 사용하는 이유
  : 기본 폰트 크기가 16px
  : 16px(브라우저의 기본 폰트 크기) * 62.5% = 10px 로 지정 된다.
  : 10px 로 지정하는 이유는 10진수 계산이 쉽고 직관적이다.
  
  사용자의 접근성 옵션(accessibility options)
  : 글씨가 작아 기본 폰트를 키워 쓰던 사람이 
    10px로 사용자 브라우저의 기본 폰트를 바꾸면 
    그 설정에 맞게 동작하지 않고 강제로 10px 설정된 상태에서 
    사용해야 하기 때문에 불편하다.

  최상위 루트 태그에 위치 : html
*/
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Noto Sans CJK KR', sans-serif, Lucida Sans Unicode, arial !important;
    font-weight: 100;
    overflow-x: hidden;
  }

  * {
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    a {
      cursor: pointer;
      color: inherit; 
      text-decoration: none; 
      outline: none;
    }
    a:hover, a:active {
      text-decoration: none; 
      color: inherit; 
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1.428 ;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    button {
      cursor: pointer;
      border: none; 
      background: none;
    }
  }
`;

export default reset;
