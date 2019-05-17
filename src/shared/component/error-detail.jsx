import React from 'react';
import styled from '@emotion/styled';

const ErrorDetail = ({ err }) =>
  <Wrap>
    <h2>{err.message}</h2>
    <pre>{err.stack}</pre>
  </Wrap>;

export default ErrorDetail;

const Wrap = styled.div`
  padding-top: 20%;
  text-align: center;
`;
