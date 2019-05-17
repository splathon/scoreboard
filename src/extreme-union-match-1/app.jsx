import React from 'react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchAllCsv } from '../shared/utils';
import Logo from '../shared/component/logo';
import Team from './component/team';
import Result from './component/result';
import parser from './csv-parser';

const fetchData = async () => {
  const csv = await fetchAllCsv({
    base: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 0 },
    team: { id: '1dko-lAxN6sisaf13kx8s2fvuyU6i3qt8oLUxM7H-tuM', gid: 655221116 },
  });
  return parser(csv);
};

const App = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const csv = await fetchData();
      setState(csv);
    })();
  }, [setState]);

  if (state === null) {
    return <p>TODO: Loading...</p>;
  }

  const { matching, results } = state;
  return (
    <Wrap>
      <Header>
        <Logo eventName="extreme" />
      </Header>
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

const Header = styled.header`
  margin-top: 20px;
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
