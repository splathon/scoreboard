import React from 'react';
import styled from '@emotion/styled';

const Loader = () =>
  <Wrap>
    <img src="./image/loader.svg" width="100" height="100" alt="Loading..." />
  </Wrap>;

export default Loader;

const Wrap = styled.div`
  padding-top: 20%;
  text-align: center;
`;
