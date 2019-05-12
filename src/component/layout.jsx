import React from 'react';
import { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Layout = ({ children }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const $el = ref.current;
    const $content = $el.firstElementChild;
    const baseWidth = $content.getBoundingClientRect().width;
    const curWidth = window.innerWidth;
    const scale = (curWidth / baseWidth).toFixed(2);
    $content.style.transform = `scale(${scale})`;
  }, [ref]);

  return (
    <Wrap ref={ref}>
      {children}
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;
