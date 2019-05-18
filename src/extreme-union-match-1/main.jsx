import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from '../shared/component/global-style';
import Layout from '../shared/component/layout';
import App from './app';

(async () => {
  const params = new URLSearchParams(location.search);
  const eventName = params.get('ev');
  const isPreview = params.has('preview');

  console.log('render', { eventName, isPreview });

  render(
    <Layout aspect={[1600, 900]} debug={isPreview}>
      <GlobalStyle />
      <App
        {...{ eventName, isPreview }}
      />
    </Layout>,
    document.getElementById('app')
  );
})();
