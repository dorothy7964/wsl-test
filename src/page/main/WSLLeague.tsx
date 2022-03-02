import ImgWslLogoV from '@/components/logoImg/ImgWslLogoV';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import BgWordStyle from '@/styles/wrapper/bgWordStyle';
import { mobileWidth } from '@/views/main/ScrollContents';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const WSLLeague = (): React.ReactElement | null => {
  const { isMobile } = useMedia();
  const { t } = useTranslation();

  return (
    <Wrapper mobileWidth={mobileWidth}>
      {!isMobile && <BgWordStyle top="-65rem" left="44rem" opacity="0.2" />}
      <Fade top>
        <h2>World eSports League</h2>
        <ContentsBox>
          <h3>{t('wsl_league_01')}</h3>
          <h3>{t('wsl_league_02')}</h3>
        </ContentsBox>
      </Fade>
      <ImgWslLogoV />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

const ContentsBox = styled.div`
  margin: 73px auto;
`;

export default WSLLeague;
