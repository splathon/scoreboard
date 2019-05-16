import React from 'react';
import styled from '@emotion/styled';

const Counter = ({ cur, total }) => (
  <Wrap>
    {new Array(total).fill(false).map((_, idx) => (
      <Bullet key={idx} isFill={idx < cur} />
    ))}
  </Wrap>
);

export default Counter;

const Wrap = styled.div`
  display: flex;
`;

const Bullet = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.isFill ? '#f5a623' : '#999'};
`;
