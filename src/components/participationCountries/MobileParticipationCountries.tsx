import { participatingCountries } from '@/common/participatingCountries';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import Arrow from '@/components/arrow/Arrow';

const MobileParticipationCountries = (): React.ReactElement | null => {
  const { t } = useTranslation();

  const [isShowMenu, setShowMenu] = useState<string>('asia');

  return (
    <CountryBox>
      {_.map(participatingCountries, (value: IParticipatingCountries, name: string) => (
        <div key={name}>
          <MenuWrapper bgcolor={value.continentColor}>
            <TitleBox>
              <span>{value.continentTitle}</span>
              <span>{value.continentCountries.length}</span>
            </TitleBox>
            <ArrowBox isShow={isShowMenu === name} onClick={() => setShowMenu(name)}>
              <Arrow color="#fff" size="sm" direction={isShowMenu === name ? 'bottom' : 'top'} />
            </ArrowBox>
          </MenuWrapper>
          <ContinentBox bgcolor={value.continentColor} isShow={isShowMenu === name}>
            {_.map(value.continentCountries, (country: any) => (
              <div key={country.iso} css={flegBox}>
                {country.iso === 'tw' ? (
                  <img
                    src="https://res.cloudinary.com/dsg49ksyn/image/upload/w_30,h_20,q_auto,c_fill,g_auto/wsl/country/tw.png"
                    alt={country}
                    width="30"
                  />
                ) : (
                  <Flag code={country.iso} width="30" />
                )}
                <div css={flegName}>{t(country.lang)}</div>
              </div>
            ))}
          </ContinentBox>
        </div>
      ))}
    </CountryBox>
  );
};

const CountryBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.button<{ bgcolor: string }>`
  color: #fff;
  width: 100%;
  padding: 2em 3rem;
  font-size: 1rem;
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  span {
    font-size: 3rem;
    font-weight: 100;
  }

  span:nth-of-type(2) {
    font-size: 4rem;
  }
`;
const ArrowBox = styled.div<{ isShow: boolean }>`
  width: 20%;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: ${({ isShow }) => (isShow ? 'none' : 'pointer')};
  top: ${({ isShow }) => (isShow ? '-6px' : '2px')};
`;

const ContinentBox = styled.div<{ bgcolor: string; isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  margin-left: 20px;
  padding: 15px;
  border-left: 1px solid ${({ bgcolor }) => bgcolor};
  max-height: 270px;
  flex-direction: column;
  flex-wrap: wrap;

  animation: dropdownParticipation 0.5s linear;

  @keyframes dropdownParticipation {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
    }
  }
`;

const flegBox = css`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const flegName = css`
  margin-left: 10px;
  font-size: 1.5rem;
`;

export default MobileParticipationCountries;
