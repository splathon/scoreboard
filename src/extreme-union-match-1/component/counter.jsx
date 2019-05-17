import React from 'react';
import styled from '@emotion/styled';

const Counter = ({ cur, total }) => (
  <Wrap>
    {new Array(total).fill(false).map((_, idx) => (
      <Bullet key={idx} isFill={idx < cur}>●</Bullet>
    ))}
  </Wrap>
);

export default Counter;

const Wrap = styled.div`
  display: flex;
`;

const Bullet = styled.span`
  color: ${props =>
    props.isFill ? '#f5a623' : '#999'};
`;
