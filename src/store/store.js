import { atom } from 'recoil';

export const formListState = atom({
  key: 'form',
  default: {
    surveyName: '설문조사',
    formData: [],
  },
});

export const clickedIdState = atom({
  key: 'clickedId',
  default: [],
});
export const linkState = atom({
  key: 'link',
  default: '',
});

export const formNumState = atom({
  key: 'formNumState',
  default: 0,
});

export const openState = atom({
  key: 'modal',
  default: false,
});
