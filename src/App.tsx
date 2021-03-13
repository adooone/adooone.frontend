import React from 'react';
import '~/styles/main.scss';
import '~/styles/sass/main.sass';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from '~/layout/Layout';
import Routes from '~/pages/Routes';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
