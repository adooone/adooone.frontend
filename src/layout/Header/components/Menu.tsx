import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../header.module.scss';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
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
