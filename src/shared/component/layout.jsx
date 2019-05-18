import React from 'react';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Layout = ({ aspect, debug, children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const fixSize = () => {
      const $container = ref.current;
      const $content = $container.firstElementChild;

      const { innerWidth, innerHeight } = window;

      const scaleX = innerWidth / aspect[0];
      const scaleY = innerHeight / aspect[1];
      const scale = (scaleX > scaleY) ? scaleY : scaleX;

      const left = Math.abs(Math.floor(((aspect[0] * scale) - innerWidth) / 2));
      const top = Math.abs(Math.floor(((aspect[1] * scale) - innerHeight) / 2));

      const transform = `scale(${scale}) translate3d(${left}px, ${top}px, 0)`;
      $content.style.transform = transform;
    };

    fixSize();
    window.addEventListener('resize', fixSize, false);
    return () => window.removeEventListener('resize', fixSize);
  }, [ref, aspect]);

  return (
    <Wrap ref={ref}>
      <Content aspect={aspect} debug={debug}>
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
  width: ${props => props.aspect[0]}px;
  height: ${props => props.aspect[1]}px;
  ${props => props.debug ? 'outline: 1px solid #fff;' : ''}
  transform-origin: top left;
  transition: all .2s ease-in;
`;
