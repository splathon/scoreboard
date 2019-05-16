import React from 'react';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const boardWidth = 1080;
const boardHeight = 600;

const Layout = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const fit = () => {
      const $container = ref.current;
      const $content = $container.firstElementChild;

      const { innerWidth, innerHeight } = window;

      const scaleX = innerWidth / boardWidth;
      const scaleY = innerHeight / boardHeight;
      const scale = (scaleX > scaleY) ? scaleY : scaleX;

      const left = Math.abs(Math.floor(((boardWidth * scale) - innerWidth) / 2));
      const top = Math.abs(Math.floor(((boardHeight * scale) - innerHeight) / 2));

      const transform = `scale(${scale}) translate3d(${left}px, ${top}px, 0)`;
      $content.style.transform = transform;
    };

    fit();
    window.addEventListener('resize', fit, false);
    return () => window.removeEventListener('resize', fit);
  }, [ref]);

  return (
    <Wrap ref={ref}>
      <Content>
        {children}
      </Content>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  position:relative;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  width: ${boardWidth}px;
  height: ${boardHeight}px;
  padding: 20px;
  box-sizing: border-box;
  transform-origin: top left;
  transition: all .2s ease-in;
`;
