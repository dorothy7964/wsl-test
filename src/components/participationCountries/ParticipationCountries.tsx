import useMedia from '@/hook/mediaQuery/useMediaQuery';
import React from 'react';
import DefaultParticipationCountries from './DefaultParticipationCountries';
import MobileParticipationCountries from './MobileParticipationCountries';

const ParticipationCountries = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  if (isMobile) {
    return <MobileParticipationCountries />;
  }

  return <DefaultParticipationCountries />;
};

export default ParticipationCountries;
