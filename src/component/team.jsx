import React from 'react';
import styled from '@emotion/styled';
import Counter from './counter';

const Team = ({ name, members, winCount, totalMatchCount, id }) => (
  <Wrap id={id}>
    <WinCount>{winCount}</WinCount>
    <Counter cur={winCount} total={totalMatchCount} />
    <Name>{name}</Name>
    <Members>
      {members.map(mName => <div key={mName}>{mName}</div>)}
    </Members>
  </Wrap>
);

export default Team;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.id === 'alpha' ? 'flex-end' : 'flex-start'
  }
`;

const WinCount = styled.div`
  font-size: 4rem;
`;

const Name = styled.div`
  font-size: 2rem;
`;

const Members = styled.div`
  font-size: .8rem;
`;
