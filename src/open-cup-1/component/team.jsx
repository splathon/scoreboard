import React from 'react';
import styled from '@emotion/styled';
import Counter from './counter';

const Team = ({ name, members, life, lifeMax, id }) => (
  <Wrap id={id}>
    <LifeWrap>
      <LifeCount>{life}</LifeCount>
    </LifeWrap>
    <LifeCounterWrap>
      <Counter cur={life} total={lifeMax} fillColor="#ff66ee" char="★" />
    </LifeCounterWrap>
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
  };
  text-align: ${props =>
    props.id === 'alfa' ? 'right' : 'left'
  };
`;

const LifeWrap = styled.div`
  position: relative;
  width: 100%;
`;

const Pinch = styled.div`
  position: absolute;
  top: 50%;
  ${props =>
    props.id === 'alfa' ? 'right' : 'left'
  }: 10%;
  transform: rotate(${props => props.id === 'alfa' ? 10 : -10}deg);
  color: #ddf00f;
  font-size: 2rem;
`;

const LifeCount = styled.div`
  font-size: 7rem;
  margin-bottom: -4rem;
`;

const LifeCounterWrap = styled.div`
  font-size: 3rem;
  margin-bottom: -1rem;
`;

const Name = styled.div`
  font-size: 3.5rem;
`;

const Members = styled.div`
  font-size: 2rem;

  & div + div {
    margin-top: -1rem;
  }
`;
