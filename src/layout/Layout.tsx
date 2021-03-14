import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AppBackground from './Background';
import styles from './layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AppBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
