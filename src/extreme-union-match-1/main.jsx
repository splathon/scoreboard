import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from '../shared/component/global-style';
import Layout from '../shared/component/layout';
import { fetchAllCsv } from '../shared/utils';
import parser from './csv-parser';
import App from './app';

(async () => {
  const [, , appType] = location.hash.split('/');
  if (!['preview', 'main'].includes(appType)) {
    throw new Error(`Undefined appType: ${appType}`);
  }

  const appData = {
    base: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 0 },
    team: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 655221116 },
  };

  const csv = await fetchAllCsv(appData);

  render(
    <Layout>
      <GlobalStyle />
      <App {...parser(csv)} />
    </Layout>,
    document.getElementById('app')
  );
})();
