import { atom } from 'recoil';

interface ViewState {
  page: string | null;
}

export const viewState = atom<ViewState>({
  key: 'viewState',
  default: {
    page: null,
  },
});
