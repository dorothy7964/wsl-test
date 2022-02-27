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
      <div>
        <h2>WSL 2022</h2>
        <h2>PARTICIPATING COUNTRIES</h2>
      </div>
      <ParticipationBox isMobile={isMobile}>
        <ParticipationCountries />
      </ParticipationBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

const ParticipationBox = styled.div<{ isMobile: boolean }>`
  margin-top: ${({ isMobile }) => (isMobile ? '1.5em' : '3em')};
  width: '100%';
`;

export default WSLParticipationCountries;
