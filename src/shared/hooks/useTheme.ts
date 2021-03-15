import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Theme } from '~/core/model/user';
import { userPreferences } from '~/core/store/atoms/user';

export default function useTheme(defaultTheme: Theme): void {
  const savedTheme = useRef<Theme>(null);
  const [theme, setTheme] = useRecoilState(userPreferences.theme);

  useEffect(() => {
    savedTheme.current = theme;
    return () => setTheme(savedTheme.current);
  }, []);

  useEffect(() => {
    if (defaultTheme) setTheme(defaultTheme);
  }, [defaultTheme]);
}
