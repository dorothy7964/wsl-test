import useMedia from '@/hook/mediaQuery/useMediaQuery';
import React from 'react';
import DefaultParticipationCountries from './DefaultParticipationCountries';
import MobileParticipationCountries from './MobileParticipationCountries';

type ParticipationCountriesProps = {
  title: string;
  subTitle: string;
};

const ParticipationCountries = ({
  title,
  subTitle,
}: ParticipationCountriesProps): React.ReactElement | null => {
  const { isMobile } = useMedia();

  if (isMobile) {
    return <MobileParticipationCountries title={title} subTitle={subTitle} />;
  }

  return <DefaultParticipationCountries title={title} subTitle={subTitle} />;
};

export default ParticipationCountries;
