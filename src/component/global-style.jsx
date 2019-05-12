import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global styles={css({
    body: {
      margin: 0,
      backgroundColor: '#333',
      color: '#fff'
    }
  })} />
);

export default GlobalStyle;
