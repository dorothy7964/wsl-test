import { languages } from '@/common/languages';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

type SelectLangProps = {
  showFlag?: boolean;
  showName?: boolean;
};

const langWidth = '145px';

const SelectLang = ({ showFlag, showName }: SelectLangProps): React.ReactElement | null => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('ko');

  useEffect(() => {
    if (i18n.languages[0] === 'en') {
      return setCurrentLanguage('en');
    }
    return setCurrentLanguage('ko');
  }, [i18n.languages[0]]);

  const lang = _.filter(languages, (country) => country.code === currentLanguage);
  const multilingual = _.filter(languages, (country) => country.show);

  const onSelectLang = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <DropdouwnWrapper langWidth={langWidth}>
      <div css={dropdownLang}>
        <Flag code={lang[0].iso} width={24} height={24} />
        <LangTitle>{t(lang[0].lang)}</LangTitle>
        <BottomTriangle />
      </div>
      <DropdownContent className="dropdownItem">
        {_.map(
          multilingual,
          (country: ILanguages) =>
            currentLanguage !== country.code && (
              <LangBtn
                langWidth={langWidth}
                key={country.code}
                onClick={() => onSelectLang(country.code)}
              >
                {showFlag && <Flag code={country.iso} width={24} height={24} />}
                {showName && <LangTitle>{t(country.lang)}</LangTitle>}
              </LangBtn>
            )
        )}
      </DropdownContent>
    </DropdouwnWrapper>
  );
};

const DropdouwnWrapper = styled.div<{ langWidth: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ langWidth }) => langWidth};

  :hover {
    .dropdownItem {
      display: block;
    }
  }
`;

const dropdownLang = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
`;

const LangTitle = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 19px;
`;

const BottomTriangle = styled.span`
  width: 8px;
  height: 8px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
  margin-left: 10px;
`;

const LangBtn = styled.button<{ langWidth: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ langWidth }) => langWidth};
  padding: 15px 15px;

  background-color: rgba(${({ theme }) => theme.headerRGBColor}) !important;
  backdrop-filter: blur(80px);

  ::before {
    content: '';
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: black;
    border-radius: 0 0 15px 15px;
  }

  img,
  span {
    position: relative;
    color: #fff;
  }
`;

SelectLang.defaultProps = {
  showFlag: true,
  showName: true,
} as SelectLangProps;

export default SelectLang;
