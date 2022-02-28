import ParticipationCountries from '@/components/participationCountries/ParticipationCountries';
import BgStyle from '@/styles/wrapper/bgStyle';
import { mobileWidth } from '@/views/main/ScrollContents';
import styled from '@emotion/styled';
import React from 'react';

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
