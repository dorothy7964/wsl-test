import headerToggleMenu from '@/recoil/headerToggleMenu';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import headerMenu from '../headerMenu';

type MobileFullMenuProps = {
  onScrollPage: (pageNum: number) => void;
};

const MobileFullMenu = ({ onScrollPage }: MobileFullMenuProps): React.ReactElement | null => {
  const { i18n } = useTranslation();
  const [isShowCheck, setIsShowCheck] = useRecoilState(headerToggleMenu);
  const [currentLanguage, setCurrentLanguage] = useState('ko');

  const onSelectLang = (code: string) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    if (i18n.languages[0] === 'en') {
      return setCurrentLanguage('en');
    }
    return setCurrentLanguage('ko');
  }, [i18n.languages[0]]);

  const onClickMenu = (pageNum: number) => {
    setIsShowCheck(false);
    onScrollPage(pageNum);
  };

  return (
    <Wrapper isShowCheck={isShowCheck} opacity="0.95">
      <LangBox>
        {currentLanguage === 'ko' ? (
          <h3 onClick={() => onSelectLang('en')}>ENG</h3>
        ) : (
          <h3 onClick={() => onSelectLang('ko')}>KOR</h3>
        )}
      </LangBox>
      <MenuBox>
        {_.map(headerMenu, (header: IHeaderMenu) => (
          <div
            key={header.scrollPage}
            css={menuWrapper}
            onClick={() => onClickMenu(header.scrollPage)}
          >
            <h2>{header.name}</h2>
          </div>
        ))}
      </MenuBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isShowCheck: boolean; opacity: string }>`
  display: ${({ isShowCheck }) => (isShowCheck ? 'flex' : 'none')};

  position: fixed;
  top: 0;
  left: 0;

  background-color: black;
  opacity: ${({ opacity }) => opacity};

  width: 100vw;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: dropdownFullMenu 0.5s linear;

  @keyframes dropdownFullMenu {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: ${({ opacity }) => opacity};
    }
  }
`;

const LangBox = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 33px;

  display: flex;
  justify-content: space-between;
  width: 100px;

  h3 {
    font-weight: 500;
    color: #aaa;

    :hover {
      color: #fff;
    }
  }
`;

const MenuBox = styled.div``;

const menuWrapper = css`
  cursor: pointer;
  color: #aaa;
  height: 100px;

  :hover {
    color: #fff;
  }
`;

export default MobileFullMenu;
