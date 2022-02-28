import ParticipationCountries from '@/components/participationCountries/ParticipationCountries';
import BgStyle from '@/styles/wrapper/bgStyle';
import React from 'react';
import styled from '@emotion/styled';
import { mobileWidth } from '@/views/main/ScrollContents';
import useMedia from '@/hook/mediaQuery/useMediaQuery';

const WSLParticipationCountries = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  return (
    <Wrapper mobileWidth={mobileWidth}>
      <BgStyle bgUrl="bg_world_map" position="bottom center" />
      {/* <TitleBox isMobile={isMobile}>
        <h2>WSL 2022</h2>
        <h2>PARTICIPATING COUNTRIES</h2>
      </TitleBox> */}
      <ParticipationBox isMobile={isMobile}>
        <ParticipationCountries />
      </ParticipationBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

const TitleBox = styled.div<{ isMobile: boolean }>`
  h2 {
    font-size: ${({ isMobile }) => isMobile && '4rem'};
  }
`;

const ParticipationBox = styled.div<{ isMobile: boolean }>`
  margin-top: ${({ isMobile }) => (isMobile ? '1em' : '3em')};
`;

export default WSLParticipationCountries;
