import React from 'react';
import styled from '@emotion/styled';
import Counter from './counter';

const Team = ({ name, members, life, lifeMax, id }) => (
  <Wrap id={id}>
    {life === 1 ? (<Pinch id={id}>ピンチ！</Pinch>) : null}
    <LifeCount>{life}</LifeCount>
    <Counter cur={life} total={lifeMax} fillColor="#ff66ee" char="♥" />
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.id === 'alfa' ? 'flex-end' : 'flex-start'
  }
`;

const Pinch = styled.div`
  position: absolute;
  top: 10%;
  ${props =>
    props.id === 'alfa' ? 'right' : 'left'
  }: 20%;
  transform: rotate(${props => props.id === 'alfa' ? 10 : -10}deg);
  color: #ddf00f;
  font-size: 2rem;
`;

const LifeCount = styled.div`
  font-size: 5rem;
  margin-top: -40px;
  margin-bottom: -40px;
`;

const Name = styled.div`
  font-size: 2rem;
`;

const Members = styled.div`
  font-size: .8rem;
`;
