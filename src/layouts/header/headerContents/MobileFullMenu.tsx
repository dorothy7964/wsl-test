import headerToggleMenu from '@/recoil/headerToggleMenu';
import { keyframes } from '@emotion/css';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { useRecoilState } from 'recoil';
import headerMenu from '../headerMenu';

type MobileFullMenuProps = {
  onScrollPage: (pageNum: number) => void;
};

const MobileFullMenu = ({ onScrollPage }: MobileFullMenuProps): React.ReactElement | null => {
  const flagSize = 31;
  const { t, i18n } = useTranslation();
  const [isShowCheck, setIsShowCheck] = useRecoilState(headerToggleMenu);
  const [currentLanguage, setCurrentLanguage] = useState<string>('ko');
  const [isShowAlert, setShowAlert] = useState<boolean>(false);

  const lagnAlert = (show: boolean) => {
    const bounce = keyframes({
      'from, to': {
        opacity: 0,
      },
      '25%, 75%': {
        opacity: 0.8,
      },
      '50%': {
        opacity: 1,
      },
    });

    if (show) {
      setTimeout(() => setShowAlert(false), 1500);
      return css`
        opacity: 0;
        animation: ${bounce} 1.5s linear;
      `;
    }

    if (!show) {
      return css`
        opacity: 0;
      `;
    }
  };

  const onSelectLang = (code: string) => {
    i18n.changeLanguage(code);
    setShowAlert(true);
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
      <div css={[lagnAlert(isShowAlert), changeLeng]}>{t('change_lang')}</div>

      <div css={langWrapper}>
        {currentLanguage === 'ko' ? (
          <LangBox onClick={() => onSelectLang('en')}>
            <Flag code="gb" width={flagSize} height={flagSize} />
            <span>ENG</span>
          </LangBox>
        ) : (
          <LangBox onClick={() => onSelectLang('ko')}>
            <Flag code="kr" width={flagSize} height={flagSize} />
            <span>KOR</span>
          </LangBox>
        )}
      </div>
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

const changeLeng = css`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const langWrapper = css`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 33px;

  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const LangBox = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  span {
    font-size: 24px;
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
