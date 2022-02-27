import ArrowBtn from '@/components/btn/ArrowBtn';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Playpot = (): React.ReactElement | null => {
  const { isMobile, isTablet, isPc } = useMedia();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2>WSL with PLAYPOT</h2>
      <SectionContainer isMobile={isMobile}>
        <LeftSection className="leftSection" isMobile={isMobile} isTablet={isTablet} isPc={isPc}>
          <img
            width={isMobile ? '80%' : '100%'}
            className="playpot_logo"
            src="img/contents/playpot_img.png"
            alt="playpot"
          />
        </LeftSection>
        <RightSection className="rightSction" isPc={isPc} isMobile={isMobile}>
          <h2>PLAYPOT</h2>
          <ContentsBox className="contentsBox" lang={i18n.language} isPc={isPc}>
            <h3>{t('playpot_01')}</h3>
            <h3>{t('playpot_02')}</h3>
            <h3>{t('playpot_03')}</h3>
          </ContentsBox>
          <ArrowBtn title="Go To PlayPot" url="https://playpot.net/" />
        </RightSection>
      </SectionContainer>
    </div>
  );
};

const SectionContainer = styled.div<{ isMobile: boolean }>`
  margin: ${({ isMobile }) => (isMobile ? '1.5em' : '3em')} auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  /* 예외 사이즈 */
  @media screen and (min-width: 1023px) and (max-width: 1346px) {
    .leftSection {
      margin-right: 0;
      margin-bottom: 2em;

      img {
        width: 600px;
      }
    }
    .rightSction {
      width: 100%;
      text-align: center;

      a {
        margin: 68px auto 0;
      }
    }
    .contentsBox {
      text-align: center;
      h3:nth-of-type(1),
      h3:nth-of-type(2) {
        width: 100%;
      }
    }
  }
`;

const LeftSection = styled.div<{ isMobile: boolean; isTablet: boolean; isPc: boolean }>`
  width: ${({ isMobile }) => isMobile && '400px'};
  width: ${({ isTablet }) => isTablet && '600px'};
  width: ${({ isPc }) => isPc && '800px'};

  margin-right: ${({ isPc }) => isPc && '2em'};
  margin-bottom: ${({ isPc }) => !isPc && '2em'};
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div<{ isMobile: boolean; isPc: boolean }>`
  width: ${({ isMobile }) => isMobile && '58rem'} ${({ isPc }) => isPc && '  46rem'};
  text-align: ${({ isPc }) => (isPc ? 'start' : 'center')};

  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 34px;
  }

  a {
    margin: 68px ${({ isPc }) => (isPc ? 0 : 'auto')} 0;
  }
`;

const ContentsBox = styled.div<{ lang: string; isPc: boolean }>`
  text-align: ${({ isPc }) => (isPc ? 'start' : 'center')};

  h3:nth-of-type(1),
  h3:nth-of-type(2) {
    width: ${({ isPc }) => (isPc ? '74%' : '100%')};
  }

  h3:nth-of-type(3) {
    width: 100%;
  }

  word-break: keep-all;
`;

export default Playpot;
