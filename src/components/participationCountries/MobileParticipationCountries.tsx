import { participatingCountries } from '@/common/participatingCountries';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import Arrow from '@/components/arrow/Arrow';

type MobileParticipationCountriesProps = {
  title: string;
  subTitle: string;
};

const MobileParticipationCountries = ({
  title,
  subTitle,
}: MobileParticipationCountriesProps): React.ReactElement | null => {
  const { t } = useTranslation();

  const [showContinent, setShowContinent] = useState<string>('asia');

  const toggleShowMenu = (tabName: string) => {
    if (String(tabName) === String(showContinent)) {
      return setShowContinent('');
    }
    return setShowContinent(tabName);
  };

  return (
    <CountryBox>
      <div css={titleBox}>
        <h2>{title}</h2>
        <h2>{subTitle}</h2>
      </div>
      {_.map(participatingCountries, (value: IParticipatingCountries, name: string) => (
        <div key={name} onClick={() => toggleShowMenu(name)}>
          <MenuWrapper bgcolor={value.continentColor}>
            <TitleBox>
              <span>{value.continentTitle}</span>
              <span>{value.continentCountries.length}</span>
            </TitleBox>
            <ArrowBox isShow={showContinent === name}>
              <Arrow color="#fff" size="sm" direction={showContinent === name ? 'top' : 'bottom'} />
            </ArrowBox>
          </MenuWrapper>
          <ContinentBox bgcolor={value.continentColor} isShow={showContinent === name}>
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

  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 1em;
`;

const titleBox = css`
  margin-bottom: 1em;
  h2 {
    font-size: 4rem;
  }
`;

const MenuWrapper = styled.button<{ bgcolor: string }>`
  color: #fff;
  width: 100%;
  padding: 1.5em 3rem;
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
  cursor: 'pointer';
  top: ${({ isShow }) => (isShow ? '2px' : '-6px')};
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
