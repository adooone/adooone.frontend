import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

interface ViewState {
  page: string | null;
}

const defaultViewState: ViewState = {
  page: null,
};

export const viewState = atom<ViewState>({
  key: 'viewState',
  default: defaultViewState,
  // effects_UNSTABLE: [persistAtom],
});
