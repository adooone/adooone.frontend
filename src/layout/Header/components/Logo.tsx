import React from 'react';
import { Link } from 'react-router-dom';
import AdoooneLogo from '~/shared/assets/adooone';
import styles from './logo.module.scss';

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
