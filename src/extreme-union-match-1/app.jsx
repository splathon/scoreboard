import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { boardHeight, boardWidth } from '../shared/const';
import Team from './component/team';
import Result from './component/result';

const App = props => {
  const [state] = useState(props);
  const { totalMatchCount, matching, results } = state;

  return (
    <Content>
      <Header>
        <Logo src="./image/logo/extreme.png" alt="eXtreme" />
      </Header>
      <Matching>
        <Team {...matching.alpha} totalMatchCount={totalMatchCount} id="alpha" />
        <Vs>VS</Vs>
        <Team {...matching.blavo} totalMatchCount={totalMatchCount} id="bravo" />
      </Matching>
      <Results>
        {results.map((result, idx) => (
          <Result key={idx} {...result} idx={idx} />
        ))}
      </Results>
    </Content>
  );
};

export default App;

const Content = styled.div`
  position: absolute;
  width: ${boardWidth}px;
  height: ${boardHeight}px;
  padding: 20px;
  box-sizing: border-box;
  transform-origin: top left;
  transition: all 500ms ease-in-out;
`;

const Header = styled.header`
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 149px;
  height: 62px;
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
