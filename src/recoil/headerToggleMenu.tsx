import { atom } from 'recoil';

const headerMenuState = atom({
  key: 'haderMenu',
  default: false,
});

export default headerMenuState;
