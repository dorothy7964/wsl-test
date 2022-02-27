import HamburgerMenu from '@/components/menu/hamburgerMenu/HamburgerMenu';
import styled from '@emotion/styled';
import React from 'react';
import MobileFullMenu from './MobileFullMenu';

type HeaderContentsProps = {
  onScrollPage: (pageNum: number) => void;
};

const MobileHeaderContents = ({ onScrollPage }: HeaderContentsProps): React.ReactElement | null => {
  return (
    <>
      <Wrapper>
        <MenuLogo onClick={() => onScrollPage(0)} />
        <MenuIcon>
          <HamburgerMenu />
        </MenuIcon>
      </Wrapper>
      <MobileFullMenu onScrollPage={onScrollPage} />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLogo = styled.a`
  margin-top: 9px;
  background: url(${({ theme }) => theme.menuLogoUrl}) no-repeat;
  width: 100%;
  height: 100%;
`;

const MenuIcon = styled.div`
  z-index: 3;
  .nav-toggle + label > span {
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

export default MobileHeaderContents;
