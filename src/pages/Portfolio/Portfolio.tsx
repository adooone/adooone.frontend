import React from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import Page from '~/shared/components/Page';
import Slider from '~/shared/components/Slider';
import tabletSvg from '~/shared/assets/tablet.svg';
import { ItemScreen } from './screens';
import { portfolio } from './items';
import styles from './scss/portfolio.module.scss';
// import TabletSvg from '~/shared/assets/tablet';

const Portfolio: React.FC = () => {
  return (
    <Page className={styles.page} contentClassName={styles.content}>
      <motion.div
        className={styles.tablet}
        initial={{ opacity: 0, y: -10, scaleY: 1.5 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'linear' }}
      >
        {/* <TabletSvg /> */}
        <ReactSVG src={tabletSvg} />
      </motion.div>
      <Slider
        slides={portfolio.map((item) => (
          <ItemScreen key={item.id} heading={item.caption} description={item.description} />
        ))}
      />
    </Page>
  );
};

export default Portfolio;
