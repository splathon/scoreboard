import React from 'react';
import { Global, css } from '@emotion/core';

const fontStyle = css`
  @font-face {
      font-family: Splatoon2;
      src: url(./font/splatoon2-en.woff2) format("woff2");
  }
  @font-face {
      font-family: Splatoon2;
      src: url(./font/splatoon2-ja.woff2) format("woff2");
  }
`;

const bodyStyle = css({
  body: {
    margin: 0,
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Splatoon2, BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  }
});

const GlobalStyle = () => <Global styles={[fontStyle, bodyStyle]} />;

export default GlobalStyle;
