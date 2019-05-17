import React from 'react';
import styled from '@emotion/styled';

const Result = ({ idx, stage, rule, winner, ko }) => (
  <Wrap data-idx={idx + 1}>
    {stage ? (
      <Img src={`./image/stage/${stage}.png`} alt={stage} />
    ) : (
      <Img src="./image/stage/dummy.png" />
    )}
    {stage && rule ? (
      <StageAndRule>{stage} / {rule}</StageAndRule>
    ) : null}
    {winner ? (
      <Winner>{winner} {ko ? 'ノックアウト！': ''}</Winner>
    ) : null}
  </Wrap>
);

export default Result;

const Wrap = styled.div`
  position: relative;
  margin: 5px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    border: 50px solid transparent;
    border-top: none;
    border-right: none;
    border-left-color: rgba(0,0,0, .5);
    z-index: 1;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 10px;
    display: block;
    content: attr(data-idx);
    color: #fff;
    z-index: 2;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const StageAndRule = styled.div`
  font-weight: 900;
  font-size: .8rem;
`;

const Winner = styled.div`
  font-size: .7rem;
`;
