/** @jsx jsx */
import { jsx } from '@emotion/react';
import ArrowBtn from '@/components/btn/ArrowBtn';
import ScheduleContents from '@/components/scheduleContents/ScheduleContents';
import BgStyle from '@/styles/wrapper/bgStyle';
import { wrapper } from '@/styles/wrapper/wrapper';
import styled from '@emotion/styled';
import React from 'react';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const WSLSchedule = (): React.ReactElement | null => {
  const { isMobile, isTablet, isPc } = useMedia();

  return (
    <div css={wrapper}>
      <BgStyle bgUrl="bg_schedule_text" />

      <Fade top>
        <h2>SCHEDULE</h2>
      </Fade>
      <ScheduleBox isMobile={isMobile} isTablet={isTablet} isPc={isPc}>
        <Fade top>
          <ScheduleContents
            paragraph="01"
            title="NATIONAL"
            icon="national"
            startDate="22.00.00"
            endDate="22.00.00"
          />
          <ScheduleContents
            paragraph="02"
            title="REGIONAL"
            icon="region"
            startDate="22.00.00"
            endDate="22.00.00"
          />
          <ScheduleContents
            paragraph="03"
            title="GLOBAL FINAL"
            icon="final"
            startDate="22.00.00"
            endDate="22.00.00"
          />
        </Fade>
      </ScheduleBox>
      <Fade top>
        <ArrowBtn title="ENTRY" url="https://playpot.net/auth/signup" />
      </Fade>
    </div>
  );
};

const ScheduleBox = styled.div<{ isMobile: boolean; isTablet: boolean; isPc: boolean }>`
  width: ${({ isTablet }) => isTablet && '100%'};
  width: ${({ isPc }) => isPc && '73%'};

  margin-top: ${({ isMobile }) => (isMobile ? '15px' : '122px')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '15px' : '109px')};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default WSLSchedule;
