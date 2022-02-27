import { numFormat } from '@/common/numUtils';
import ArrowBtn from '@/components/btn/ArrowBtn';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import { ShineMotion } from '@/styles/animation/shine';
import BgStyle from '@/styles/wrapper/bgStyle';
import BgWordStyle from '@/styles/wrapper/bgWordStyle';
import StrokeWrapper from '@/styles/wrapper/strokeWrapper';
import { mobileWidth } from '@/views/main/ScrollContents';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TournamentPrize = (): React.ReactElement | null => {
  const { isMobile } = useMedia();
  const { t, i18n } = useTranslation();

  const isKo = i18n.language === 'ko';
  const lang: { [k in string]: number } = { ko: 10000000, en: 100000 };

  const ConntryUnit = () => {
    return <h1 css={[prizeUnit, prizeFont]}>{t('monetary_unit')}</h1>;
  };

  return (
    <WidthBox mobileWidth={mobileWidth}>
      {!isMobile && <BgStyle bgUrl="bg_logo" bottom="2px" />}
      <ImgWslLogo>
        <img src="img/logo/wsl_logo_h_dark.png" alt="logo" width={189} height={96} />
        <img src="img/logo/wsl_year_dark.png" alt="2022" width={149} height={68} />
      </ImgWslLogo>
      <h2 css={prizeTitle}>Prize Pool</h2>
      <ShineMotion bgPosition="490px" color="#ffe888" shineColor="white">
        <StrokeWrapper width="2px" color="#ffdd51">
          <PrizeBox>
            {!isKo && <ConntryUnit />}
            <h1 css={prizeFont}>{numFormat(Number(lang[i18n.language]))}</h1>
            {isKo && <ConntryUnit />}
          </PrizeBox>
        </StrokeWrapper>
      </ShineMotion>
      <ArrowBtn title="ENTRY" url="https://playpot.net/auth/signup" />
    </WidthBox>
  );
};

const WidthBox = styled.div<{ mobileWidth: string }>`
  margin: 0 auto;
  width: ${({ mobileWidth }) => mobileWidth};
`;

const ImgWslLogo = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  img:nth-of-type(2) {
    margin: 10px;
  }
`;

const PrizeBox = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 7rem;
  text-shadow: 3px 3px 20px orange;
`;

const prizeTitle = css`
  font-weight: 700;
  font-style: italic;
`;

const prizeFont = css`
  font-family: sans-serif !important;
  font-style: italic;
`;

const prizeUnit = css`
  font-size: 5.6rem;
`;

export default TournamentPrize;
