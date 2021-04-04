import React from 'react';
import { Link } from 'react-router-dom';
import AdooButton from '~/shared/components/AdooButton/AdooButton';
import styles from './menu.module.scss';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <AdooButton className={styles.menuButton} caption="😎" />
      <div className={styles.items}>
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
    </div>
  );
};

export default Menu;
