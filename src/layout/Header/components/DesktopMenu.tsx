import React from 'react';
import { Link } from 'react-router-dom';
import AdooButton from '~/shared/components/AdooButton/AdooButton';
import styles from './menu.module.scss';

const DesktopMenu: React.FC = () => {
  return (
    <div className={styles.desktopMenu}>
      <Link to="/">
        <AdooButton bordered caption="HOME" />
      </Link>
      <Link to="/portfolio">
        <AdooButton bordered caption="PORTFOLIO" />
      </Link>
      <Link to="/team">
        <AdooButton bordered caption="TEAM" />
      </Link>
    </div>
  );
};

export default DesktopMenu;
