import React from 'react';
import Page from '~/shared/components/Page';
import useTheme from '~/shared/hooks/useTheme';
import styles from './home.module.scss';

const Home: React.FC = () => {
  useTheme('dark');

  return (
    <Page className={styles.home} contentClassName={styles.content}>
      <h1>Hello World!</h1>
    </Page>
  );
};

export default Home;
