/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import IconButtomMoveTriangle from '@/styles/icon/iconButtomMoveTriangle ';
import IconMouseScroll from '@/styles/icon/iconMouseScroll';
import BgStyle from '@/styles/wrapper/bgStyle';
import styled from '@emotion/styled';
import React from 'react';
// @ts-ignore
import Flip from 'react-reveal/Flip';
import { mobileWidth } from '@/views/main/ScrollContents';

const Main = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  return (
    <Wrapper mobileWidth={mobileWidth}>
      <BgStyle bgUrl="bg_line" />
      <Flip bottom>
        <MainTitle top={isMobile ? '36%' : '38%'}>
          <img width={isMobile ? '100%' : '61%'} src="img/logo/main_logo.png" alt="main logo" />
          <h1>THE ESPORTS YOU MAKING</h1>
        </MainTitle>
      </Flip>
      <IconMouseScroll />
      <IconButtomMoveTriangle />
      <IconButtomMoveTriangle />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

const MainTitle = styled.div<{ top: string }>`
  position: relative;
  display: flex;
  justify-content: center;

  h1 {
    position: absolute;
    top: ${({ top }) => top};
  }
`;

export default Main;
