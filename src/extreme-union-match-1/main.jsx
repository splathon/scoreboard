import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from '../shared/component/global-style';
import Layout from '../shared/component/layout';
import App from './app';

(async () => {
  render(
    <Layout>
      <GlobalStyle />
      <App />
    </Layout>,
    document.getElementById('app')
  );
})();
