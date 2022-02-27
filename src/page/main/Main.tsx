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
      <BgStyle bgUrl={`bg_line_${isMobile ? 'mobile' : 'pc'}`} />

      <Flip bottom>
        <MainWrapper isMobile={isMobile}>
          <img src="img/logo/main_logo.png" alt="main logo" />
          <h1>THE ESPORTS YOU MAKING</h1>
        </MainWrapper>
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

const background = css``;

const MainWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;

  img {
    width: ${({ isMobile }) => (isMobile ? '100%' : '61%')};
  }

  h1 {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Main;
