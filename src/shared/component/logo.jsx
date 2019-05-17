import React from 'react';
import styled from '@emotion/styled';

const Logo = ({ eventName }) =>
  <Img src={`./image/logo/${eventName}.png`} alt={eventName} />;

export default Logo;

const Img = styled.img`
  width: 149px;
  height: 62px;
`;
