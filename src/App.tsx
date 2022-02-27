import { ThemeEnums, themeMode } from '@/recoil/activeTheme';
import AppRouter from '@/routes';
import GlobalStyle from '@/styles/GlobalStyle';
import '@/styles/reset';
import { darkTheme, lightTheme } from '@/theme/themeType';
import { Theme, ThemeProvider } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';

const App = (): React.ReactElement | null => {
  const activeTheme: ThemeEnums = useRecoilValue(themeMode);
  const { LIGHT } = ThemeEnums;

  const theme: Theme = activeTheme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />

      <GlobalStyle styles={theme} />
    </ThemeProvider>
  );
};

export default App;
