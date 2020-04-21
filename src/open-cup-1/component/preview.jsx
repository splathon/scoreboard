import React from 'react';
import styled from '@emotion/styled';

const Preview = ({ sendUpdate }) => (
  <Wrap>
    <span>
      これはプレビュー画面です！
    </span>
    <Button onClick={sendUpdate}>main画面に反映</Button>
  </Wrap>
);

export default Preview;

const Wrap = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 0, 0, .5);
`;

const Button = styled.button`
  margin-left: 10px;
`;
