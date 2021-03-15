import React from 'react';
import { useLocation } from 'react-router';
import ThemeSwitcher from '~/shared/components/Theme/ThemeSwitcher';

const Slogan: React.FC = () => {
  const location = useLocation();

  // TODO: make theme independent from store on this pages
  const themeSwitchDisabled = location.pathname.includes('portfolio') || location.pathname === '/';

  return (
    <div className="slogan">
      <div className="compname">ADOOONE LAB.</div>
      <span className="comdslog">&nbsp;GOOD TIMES</span>
      <ThemeSwitcher disabled={themeSwitchDisabled} />
    </div>
  );
};

export default Slogan;
