import React from 'react';
import { render } from 'react-dom';
import { Global, css } from '@emotion/core';
import App from './app';
import { fetchCsv } from './utils';

const globalStyle = css({
  'body': {
    margin: 0,
    backgroundColor: '#333',
  }
});

const parseCsv = _csv => {
  return {
    matching: {
      alpha: {},
      barvo: {}
    },
    results: []
  };
};

(async () => {
  const csv = await fetchCsv(
    { id: '1k8fy1ibXKsPEyNjzfOpBrO9HlHKvy0Ra0_B9Kw94gbw', sid: '0' }
  );
  const data = parseCsv(csv);

  render(<>
    <Global styles={globalStyle} />
    <App {...data} />
  </>, document.getElementById('scoreboard'));
})();
