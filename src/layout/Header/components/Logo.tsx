import React from 'react';
import { Link } from 'react-router-dom';
import AdoooneLogo from '~/shared/assets/adooone';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <AdoooneLogo />
        Adooone
      </Link>
    </div>
  );
};

export default Logo;
