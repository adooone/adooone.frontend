import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../header.module.scss';
import AdoooneLogo from '~/shared/assets/adooone';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <AdoooneLogo />
        <p>Adooone</p>
      </div>
    </Link>
  );
};

export default Logo;
