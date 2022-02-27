import useMedia from '@/hook/mediaQuery/useMediaQuery';
import React from 'react';
import DefaultScheduleContents from './DefaultScheduleContents';
import MobileScheduleContents from './MobileScheduleContents';

type ScheduleContentsProps = {
  paragraph: string;
  title: string;
  icon: string;
  startDate?: string;
  endDate?: string;
};

const ScheduleContents = ({
  paragraph,
  title,
  icon,
  startDate,
  endDate,
}: ScheduleContentsProps): React.ReactElement | null => {
  const { isMobile } = useMedia();

  if (isMobile) {
    return (
      <MobileScheduleContents
        paragraph={paragraph}
        title={title}
        icon={icon}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <DefaultScheduleContents
      paragraph={paragraph}
      title={title}
      icon={icon}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

ScheduleContents.defaultProps = {} as ScheduleContentsProps;

export default ScheduleContents;
