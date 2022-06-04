import React from 'react';
import styled from '@emotion/styled';

const Counter = ({
  cur,
  total,
  char = '●',
  fillColor = '#f5a623',
  blankColor = '#999',
}) => (
  <Wrap>
    {new Array(total).fill(false).map((_, idx) => (
      <Bullet
        key={idx}
        isFill={idx < cur}
        fillColor={fillColor}
        blankColor={blankColor}
      >{char}</Bullet>
    ))}
  </Wrap>
);

export default Counter;

const Wrap = styled.div`
  display: flex;
`;

const Bullet = styled.span`
  color: ${props =>
    props.isFill ? props.fillColor : props.blankColor };
`;
