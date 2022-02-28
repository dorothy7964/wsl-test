import ParticipationCountries from '@/components/participationCountries/ParticipationCountries';
import BgStyle from '@/styles/wrapper/bgStyle';
import React from 'react';
import styled from '@emotion/styled';
import { mobileWidth } from '@/views/main/ScrollContents';

const WSLParticipationCountries = (): React.ReactElement | null => {
  return (
    <Wrapper mobileWidth={mobileWidth}>
      <BgStyle bgUrl="bg_world_map" position="bottom center" />

      <ParticipationCountries title="WSL 2022" subTitle="PARTICIPATING COUNTRIES" />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mobileWidth: string }>`
  width: ${({ mobileWidth }) => mobileWidth};
`;

export default WSLParticipationCountries;
