import { ThemeEnums, themeMode } from '@/recoil/activeTheme';
import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

const ToggleTheme = (): React.ReactElement | null => {
  const [activeTheme, setTheme] = useRecoilState<ThemeEnums>(themeMode);

  const { LIGHT, DARK } = ThemeEnums;

  const handleChangeTheme = useCallback((): void => {
    if (activeTheme === DARK) {
      localStorage.setItem('theme', 'LIGHT');
      setTheme(LIGHT);
      return;
    }

    localStorage.setItem('theme', 'DARK');
    setTheme(DARK);
  }, [setTheme, activeTheme]);

  return (
    <ToggleThemeBtn activeTheme={activeTheme} onClick={handleChangeTheme}>
      {activeTheme === LIGHT ? '🌝' : '🌚'}
    </ToggleThemeBtn>
  );
};

const ToggleThemeBtn = styled.button<{ activeTheme: string }>`
  position: fixed;
  z-index: 9;
  bottom: 4%;
  right: 3%;

  background-color: inherit;
  border: '1px solid inherit';
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${({ activeTheme }) =>
    activeTheme === 'LIGHT'
      ? '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
      : '0 5px 10px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.25)'};
`;

export default ToggleTheme;
