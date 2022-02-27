import useMedia from '@/hook/mediaQuery/useMediaQuery';
import useWhell from '@/hook/windwEvent/useWhell';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';
import HeaderContents from '@/layouts/header/headerContents/HeaderContents';
import MobileHeaderContents from '@/layouts/header/headerContents/MobileHeaderContents';

const Header = ({ scrollPage }: any): React.ReactElement | null => {
  const { isMobile } = useMedia();

  const wheelType = useWhell().wheelType;

  const onScrollPage = (number: number) => {
    scrollPage.current.scrollToSlide(number);
  };

  return (
    <HeaderWrapper css={wheelType === 'minus' && navActive}>
      {isMobile ? (
        <MobileHeaderContents onScrollPage={onScrollPage} />
      ) : (
        <HeaderContents onScrollPage={onScrollPage} />
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  line-height: 50px;

  opacity: 0;

  background-color: rgba(${({ theme }) => theme.headerRGBColor}) !important;
  backdrop-filter: blur(30px);

  :hover {
    opacity: 1;
  }
`;

const navActive = css`
  opacity: 1;
`;

export default Header;
