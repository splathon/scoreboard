import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Team from './component/team';
import Result from './component/result';

const App = props => {
  const [state] = useState(props);
  const { totalMatchCount, matching, results } = state;

  return (
    <>
      <Header>
        <Logo src="./image/logo/extreme.png" alt="eXtreme" />
      </Header>
      <Matching>
        <Team {...matching.alfa} totalMatchCount={totalMatchCount} id="alfa" />
        <Vs>VS</Vs>
        <Team {...matching.bravo} totalMatchCount={totalMatchCount} id="bravo" />
      </Matching>
      <Results>
        {results.map((result, idx) => (
          <Result key={idx} {...result} idx={idx} />
        ))}
      </Results>
    </>
  );
};

export default App;

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
