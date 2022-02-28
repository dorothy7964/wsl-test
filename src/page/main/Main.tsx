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
import Arrow from '@/components/arrow/Arrow';

const Main = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  return (
    <Wrapper mobileWidth={mobileWidth}>
      <div css={wrapper}>
        <BgStyle bgUrl={`bg_line_${isMobile ? 'mobile' : 'pc'}`} />

        <Flip bottom>
          <MainWrapper isMobile={isMobile}>
            <img src="img/logo/main_logo.png" alt="main logo" />
            <h1>THE ESPORTS YOU MAKIN4</h1>
            {/* <h1>THE ESPORTS YOU MAKING</h1> */}
          </MainWrapper>
        </Flip>
        <div css={mouseIconWrapper}>
          <IconMouseScroll />
          <span>
            <IconButtomMoveTriangle />
            <IconButtomMoveTriangle />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

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

const wrapper = css`
  width: 100%;
  height: 100%;
`;

const mouseIconWrapper = css`
  position: absolute;
  background-color: orange;
  height: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default Main;
