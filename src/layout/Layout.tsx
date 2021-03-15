import React, { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AppBackground from './Background';
import styles from './layout.module.scss';

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    const favicon = document.querySelector('link#favicon');
    document.head.append(favicon as Node);
  }, []);

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
