import React from 'react';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { boardWidth, boardHeight } from '../const';

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

      $content.style.transform = `scale(${scale})`;
      $content.style.left = `${left}px`;
      $content.style.top = `${top}px`;
    };

    fit();
    window.addEventListener('resize', fit, false);
    return () => window.removeEventListener('resize', fit);
  }, [ref]);

  return (
    <Wrap ref={ref}>
      {children}
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  position:relative;
  height: 100vh;
`;
