/** @jsx jsx */
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import { mobileWidth } from '@/views/main/ScrollContents';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WSLFestival = (): React.ReactElement | null => {
  const { isMobile, isPc } = useMedia();
  const { t, i18n } = useTranslation();

  return (
    <Wrapper isMobile={isMobile} isPc={isPc} mobileWidth={mobileWidth}>
      <h2>FESTIVAL FOR GLOBAL ESPORTS FANS</h2>
      <ContentsBox>
        <h3>{t('wsl_festival_01')}</h3>
        <h3>{t('wsl_festival_02')}</h3>
        <h3>{t('wsl_festival_03')}</h3>
      </ContentsBox>
      <img
        width="100%"
        src={`img/contents/sub_festival_contents_${i18n.language}_pc.png`}
        alt="FESTIVAL FOR GLOBAL ESPORTS FANS"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean; isPc: boolean; mobileWidth: string }>`
  width: ${({ isMobile, mobileWidth }) => (isMobile ? mobileWidth : '90%')};
  width: ${({ isPc }) => isPc && '50%'};
`;

const ContentsBox = styled.div`
  margin: 73px 0;
`;

export default WSLFestival;
