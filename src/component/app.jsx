import React from 'react';
import styled from '@emotion/styled';
import Team from './team';
import Result from './result';

const App = ({ totalMatchCount, matching, results }) => (
  <Content>
    <Header>
      <Logo src="./image/logo/extream.png" alt="eXtream" />
    </Header>
    <Matching>
      <Team {...matching.alpha} totalMatchCount={totalMatchCount} id="alpha" />
      <Team {...matching.bravo} totalMatchCount={totalMatchCount} id="bravo" />
    </Matching>
    <Results>
      {results.map((result, idx) => (
        <Result key={idx} {...result} idx={idx} />
      ))}
    </Results>
  </Content>
);

export default App;

const Content = styled.div`
  width: 1080px;
  height: 600px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #fff;
`;

const Header = styled.header`
  margin-top: 20px;
  margin-left: 20px;
`;

const Logo = styled.img`
  width: 149px;
  height: 62px;
`;

const Matching = styled.div`
`;

const Results = styled.div`
  display: flex;
`;
