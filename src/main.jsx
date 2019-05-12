import React from 'react';
import { render } from 'react-dom';
import { fetchCsv } from './utils';
import parseCsv from './parse-csv';
import GlobalStyle from './global-style';
import App from './app';


(async () => {
  const csv = fetchCsv(
    { id: '1k8fy1ibXKsPEyNjzfOpBrO9HlHKvy0Ra0_B9Kw94gbw', sid: '0' }
  );
  const data = parseCsv(csv);

  render(<>
    <GlobalStyle />
    <App {...data} />
  </>, document.getElementById('scoreboard'));
})();
