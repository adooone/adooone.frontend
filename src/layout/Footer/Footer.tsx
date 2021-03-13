import React from 'react';
import FooterMenu from './components/FooterMenu';
import Slogan from './components/Slogan';
// import AppInfo from '~/shared/components/AppInfo';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_box bar">
        <Slogan />
        <FooterMenu />
      </div>
      {/* <AppInfo /> */}
    </footer>
  );
};

export default Footer;
