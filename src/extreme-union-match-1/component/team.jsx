import React from 'react';
import styled from '@emotion/styled';
import Counter from './counter';

const Team = ({ name, members, life, lifeMax, id }) => (
  <Wrap id={id}>
    <LifeCount>{life}</LifeCount>
    <LifeWrap>
      {life === 1 ? (<Pinch id={id}>ピンチ！</Pinch>) : null}
      <Counter cur={life} total={lifeMax} fillColor="#ff66ee" char="♥" />
    </LifeWrap>
    <Name>{name}</Name>
    <Members>
      <div>
        <span>{members[0]}</span>{'　'}<span>{members[1]}</span>
      </div>
      <div>
        <span>{members[2]}</span>{'　'}<span>{members[3]}</span>
      </div>
    </Members>
  </Wrap>
);

export default Team;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.id === 'alfa' ? 'flex-end' : 'flex-start'
  }
`;

const Pinch = styled.div`
  position: absolute;
  top: -25%;
  ${props =>
    props.id === 'alfa' ? 'right' : 'left'
  }: 25%;
  transform: rotate(${props => props.id === 'alfa' ? 10 : -10}deg);
  color: #ddf00f;
  font-size: 2rem;
`;

const LifeWrap = styled.div`
  position: relative;
  font-size: 2rem;
`;

const LifeCount = styled.div`
  font-size: 5rem;
  margin-bottom: -3rem;
`;

const Name = styled.div`
  font-size: 3rem;
`;

const Members = styled.div`
  font-size: 1.5rem;
`;
