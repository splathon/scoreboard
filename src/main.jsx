import React from 'react';
import { render } from 'react-dom';
import { fetchCsv } from './utils';
import parseCsv from './parse-csv';
import GlobalStyle from './component/global-style';
import Layout from './component/layout';
import App from './component/app';


(async () => {
  const csv = await fetchCsv(
    { id: '1k8fy1ibXKsPEyNjzfOpBrO9HlHKvy0Ra0_B9Kw94gbw', sid: '0' }
  );
  const data = parseCsv(csv);

  render(<>
    <GlobalStyle />
    <Layout>
      <App {...data} />
    </Layout>
  </>, document.getElementById('scoreboard'));
})();
