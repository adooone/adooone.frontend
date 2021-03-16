import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Theme } from '~/core/model/user';

const { persistAtom } = recoilPersist();

export const userPreferences = {
  theme: atom<Theme>({
    effects_UNSTABLE: [persistAtom],
    key: 'theme',
    default: null,
  }),
};
