import React from 'react';
import Menu from './components/Menu';
import Logo from './components/Logo';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header_box">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
