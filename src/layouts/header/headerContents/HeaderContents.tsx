import SelectLang from '@/components/selectLang/SelectLang';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';
import headerMenu from '@/layouts/header/headerMenu';
import useMedia from '@/hook/mediaQuery/useMediaQuery';

type HeaderContentsProps = {
  onScrollPage: (pageNum: number) => void;
};

const HeaderContents = ({ onScrollPage }: HeaderContentsProps): React.ReactElement | null => {
  const { isTablet } = useMedia();

  return (
    <Wrapper isTablet={isTablet}>
      <MenuLogo onClick={() => onScrollPage(0)} />
      <ul css={menuBox}>
        {_.map(headerMenu, (header: IHeaderMenu) => (
          <MenuItem key={header.scrollPage} onClick={() => onScrollPage(header.scrollPage)}>
            {header.name}
          </MenuItem>
        ))}
        <MenuItem>
          <SelectLang />
        </MenuItem>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isTablet: boolean }>`
  width: ${({ isTablet }) => (isTablet ? '90%' : '80%')};
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
`;

const MenuItem = styled.li`
  margin: 0 11px;
  text-align: center;
  font-size: 19px;

  :hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

const MenuLogo = styled.a`
  cursor: pointer;
  margin-top: 5px;
  background: url(${({ theme }) => theme.menuLogoUrl}) no-repeat;
  width: 77px;
`;

const menuBox = css`
  cursor: pointer;
  display: flex;
`;

export default HeaderContents;
