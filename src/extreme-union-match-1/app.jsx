import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Logo from '../shared/component/logo';
import Loader from '../shared/component/loader';
import Team from './component/team';
import Result from './component/result';
import Counter from './component/counter';
import Preview from './component/preview';
import { useFetch, useBroadcastChannel } from './hooks';

const App = ({ eventName, isPreview }) => {
  const [viewData, setViewData] = useState(null);
  useFetch(setViewData, isPreview);
  const sendUpdate = useBroadcastChannel(eventName, isPreview, setViewData);

  if (viewData === null) {
    return <Loader />;
  }

  if (viewData instanceof Error) {
    // TODO: error
    console.error(viewData);
    return null;
  }

  const { union, matching, results } = viewData;
  return (
    <Wrap>
      {isPreview ? (<Nav><Preview sendUpdate={() => sendUpdate(viewData)} /></Nav>) : null}
      <header>
        <Logo eventName="extreme" />
      </header>
      <Union>
        <Counter cur={union.alfa.restTeam} total={union.alfa.restTeamMax} />
        <Counter cur={union.bravo.restTeam} total={union.bravo.restTeamMax} />
      </Union>
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
  padding: 20px;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Union = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;

const Matching = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  margin: 20px auto;
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
