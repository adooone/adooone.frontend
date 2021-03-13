import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AppBackground from './Background';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <AppBackground />
      {/* <Loader /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
