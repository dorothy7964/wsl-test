import { participatingCountries } from '@/common/participatingCountries';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

type DefaultParticipationCountriesProps = {
  title: string;
  subTitle: string;
};

const DefaultParticipationCountries = ({
  title,
  subTitle,
}: DefaultParticipationCountriesProps): React.ReactElement | null => {
  const { t } = useTranslation();
  const { isPc } = useMedia();

  return (
    <>
      <div css={titleBox}>
        <h2>{title}</h2>
        <h2>{subTitle}</h2>
      </div>
      <CountryBox isPc={isPc}>
        {_.map(participatingCountries, (value: IParticipatingCountries, name: string) => (
          <WountryWrapper key={name} isPc={isPc}>
            <ContinentTitle bgcolor={value.continentColor}>
              <span>{value.continentTitle}</span>
              <span>{value.continentCountries.length}</span>
            </ContinentTitle>
            <ContinentBox bgcolor={value.continentColor}>
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
          </WountryWrapper>
        ))}
      </CountryBox>
    </>
  );
};

const titleBox = css`
  margin-bottom: 3em;
`;

const CountryBox = styled.div<{ isPc: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: ${({ isPc }) => (isPc ? '80%' : '100%')};
`;

const WountryWrapper = styled.div<{ isPc: boolean }>`
  width: ${({ isPc }) => (isPc ? `calc(25% - 20px)` : '25%')};
`;

const ContinentTitle = styled.button<{ bgcolor: string }>`
  color: #fff;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 2.2rem;
    font-weight: 100;
  }

  span:nth-of-type(2) {
    font-size: 3.8rem;
  }
`;

const ContinentBox = styled.div<{ bgcolor: string }>`
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 15px;
  border-left: 1px solid ${({ bgcolor }) => bgcolor};
  opacity: 1;
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

export default DefaultParticipationCountries;
