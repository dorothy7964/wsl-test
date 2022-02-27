import { atom } from 'recoil';

export enum ThemeEnums {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const getTheme = (): any => {
  const activeTheme = localStorage.getItem('theme');

  if (activeTheme === 'LIGHT') {
    return 'LIGHT';
  }

  return 'DARK';
};

export const themeMode = atom<ThemeEnums>({
  key: 'themeMode',
  default: getTheme(),
});
