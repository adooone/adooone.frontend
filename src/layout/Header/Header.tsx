import React from 'react';
import Menu from './components/Menu';
import Logo from './components/Logo';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
