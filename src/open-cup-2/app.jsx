import React from 'react';
import { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Loader from '../shared/component/loader';
import ErrorDetail from '../shared/component/error-detail';
import Team from './component/team';
import Result from './component/result';
import Preview from './component/preview';
import { useFetch, useBroadcastChannel } from './hooks';

const App = ({ eventName, isPreview }) => {
  const [viewData, setViewData] = useState(null);
  useFetch(setViewData, isPreview);
  const sendUpdate = useBroadcastChannel(eventName, isPreview, setViewData);
  const onClickSendUpdate = useCallback(() => sendUpdate(viewData), [viewData]);

  if (viewData === null) {
    return <Loader />;
  }

  if (viewData instanceof Error) {
    return <ErrorDetail err={viewData} />;
  }

  const { matching, results } = viewData;
  return (
    <Wrap>
      {isPreview ? (<Nav><Preview sendUpdate={onClickSendUpdate} /></Nav>) : null}
      <header>
        <img src="./image/opencup/logo.png" height="62" alt="" />
      </header>
      <Matching>
        <Team {...matching.alfa} id="alfa" />
        <Vs>VS</Vs>
        <Team {...matching.bravo} id="bravo" />
      </Matching>
      <Results>
        {results.map((result, idx) => (
          <Result key={idx} {...result} idx={idx} />
        ))}
      </Results>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #333;
  background-image: url('./image/extreme/bg.png');
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Matching = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  margin: 30px auto;
`;

const Vs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const Results = styled.div`
  display: flex;
`;
