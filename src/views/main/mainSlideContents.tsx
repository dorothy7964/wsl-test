import React from 'react';

const Main = React.lazy(() => import('@/page/main/Main'));
const WSLLeague = React.lazy(() => import('@/page/main/WSLLeague'));
const WSLFestival = React.lazy(() => import('@/page/main/WSLFestival'));
const TournamentPrize = React.lazy(() => import('@/page/main/TournamentPrize'));
const GameTitles = React.lazy(() => import('@/page/main/GameTitles'));
const WSLParticipationCountries = React.lazy(() => import('@/page/main/WSLParticipationCountries'));
const WSLSchedule = React.lazy(() => import('@/page/main/WSLSchedule'));
const Playpot = React.lazy(() => import('@/page/main/Playpot'));
const Footer = React.lazy(() => import('@/page/footer/Footer'));

const mainSlideContents: IMainSlideContents[] = [
  {
    name: 'main',
    element: <Main />,
  },
  {
    name: 'wSLLeague',
    element: <WSLLeague />,
  },
  {
    name: 'wSLFestival',
    element: <WSLFestival />,
  },
  {
    name: 'tournamentPrize',
    element: <TournamentPrize />,
  },
  {
    name: 'gameTitles',
    element: <GameTitles />,
  },
  {
    name: 'wSLParticipationCountries',
    element: <WSLParticipationCountries />,
  },
  {
    name: 'wSLSchedule',
    element: <WSLSchedule />,
  },
  {
    name: 'playpot',
    element: <Playpot />,
  },
  {
    name: 'footer',
    element: <Footer />,
  },
];

export default mainSlideContents;
