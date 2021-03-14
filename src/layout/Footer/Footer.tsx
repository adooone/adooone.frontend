import React from 'react';
import FooterMenu from './components/FooterMenu';
import Slogan from './components/Slogan';
// import AppInfo from '~/shared/components/AppInfo';
import styles from './footer.module.scss';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bar}>
        <Slogan />
        <FooterMenu />
      </div>
      {/* <AppInfo /> */}
    </footer>
  );
};

export default Footer;
