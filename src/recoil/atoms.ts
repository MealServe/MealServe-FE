import { atom } from 'recoil';

export const userRoleState = atom({
  key: 'userRoleState',
  default: '',
});

export const userEmailState = atom({
  key: 'userEmailState',
  default: '',
});
