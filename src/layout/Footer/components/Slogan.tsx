import React from 'react';
import { useLocation } from 'react-router';
import ThemeSwitcher from '~/shared/components/Theme/ThemeSwitcher';
import styles from './slogan.module.scss';

const Slogan: React.FC = () => {
  const location = useLocation();

  // TODO: make theme independent from store on this pages
  const themeSwitchDisabled =
    location.pathname.includes('portfolio') || location.pathname === '/';

  return (
    <div className={styles.slogan}>
      <div className={styles.name}>ADOOONE LAB.</div>
      <span className={styles.quote}>&nbsp;GOOD TIMES</span>
      <ThemeSwitcher disabled={themeSwitchDisabled} />
    </div>
  );
};

export default Slogan;
