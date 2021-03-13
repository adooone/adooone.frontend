import React from 'react';
import '~/styles/main.scss';
import '~/styles/sass/main.sass';
import { BrowserRouter } from 'react-router-dom';
import Layout from '~/layout/Layout';
import Routes from '~/pages/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
