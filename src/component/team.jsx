import React from 'react';
import styled from '@emotion/styled';

const Team = ({ name, members, winCount, totalMatchCount, id }) => (
  <Wrap id={id}>
    {winCount} / {totalMatchCount}
    {name}
    {members.map(mName => <span key={mName}>{mName}</span>)}
  </Wrap>
);

export default Team;

const Wrap = styled.div`
`;
