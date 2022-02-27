import React from 'react';
import ReactDOM from 'react-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import { RecoilRoot } from 'recoil';
// import App from './App';
import './lang/i18n';

TopBarProgress.config({
  barColors: {
    '0': '#19264c',
    '1.0': '#3c1b32',
  },
  shadowBlur: 5,
});

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<TopBarProgress />}>
      <App />
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById('root')
);
