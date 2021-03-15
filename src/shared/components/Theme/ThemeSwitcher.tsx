import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Theme } from '~/core/model/user';
import { userPreferences } from '~/core/store/atoms/user';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

interface Props {
  disabled?: boolean;
}

const ThemeSwitcher: React.FC<Props> = ({ disabled }) => {
  const [theme, setTheme] = useRecoilState(userPreferences.theme);
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (theme) return;
    if (matches) handleSwitch('dark');
    else handleSwitch('light');
  }, [matches]);

  useEffect(() => {
    document.documentElement.className = '';
    if (theme) {
      const html = document.querySelector('html');
      if (html) html.dataset.theme = theme;
    }
  }, [theme]);

  const handleSwitch = (newTheme?: Theme) => {
    setTheme(newTheme || theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="ThemeSwitcher">
      <AdooButton
        disabled={disabled}
        caption={theme || 'switch'}
        onClick={handleSwitch}
        bordered
      />
    </div>
  );
};

export default ThemeSwitcher;
