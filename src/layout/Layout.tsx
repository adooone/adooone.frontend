import React from 'react';
// import Footer from './Footer/Footer';
import Header from './Header/Header';
import AppBackground from '~/layout/Header/components/AppBackground';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppBackground />
      {/* <Loader /> */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
