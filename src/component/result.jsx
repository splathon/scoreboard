import React from 'react';
import styled from '@emotion/styled';

const Result = ({ idx, stage, rule, winner, ko }) => (
  <Wrap idx={idx}>
    {stage ? (
      <Img src={`./image/stage/${stage}.png`} alt={stage} />
    ) : (
      <Img src="./image/stage/dummy.png" />
    )}
    {stage && rule ? (
      <StageAndRule>{stage} / {rule}</StageAndRule>
    ) : null}
    {winner ? (
      <Winner>{winner}{ko ? 'K.O.': ''}</Winner>
    ) : null}
  </Wrap>
);

export default Result;

const Wrap = styled.div`
  margin: 5px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const StageAndRule = styled.div`
  font-weight: 900;
  font-size: .7rem;
`;

const Winner = styled.div`
  font-size: .7rem;
`;
