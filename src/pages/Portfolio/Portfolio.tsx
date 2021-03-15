import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

import Page from '~/shared/components/Page';
import Slider from '~/shared/components/Slider';
import tabletSvg from '~/shared/assets/tablet.svg';
import { Theme } from '~/core/model/user';
import { portfolio } from './items';
import { ItemScreen } from './screens';
import styles from './scss/portfolio.module.scss';
import useTheme from '~/shared/hooks/useTheme';

const Portfolio: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  useTheme(theme);

  const handleSlideChanged = (index: number) => {
    setTheme(portfolio[index].theme);
  };

  return (
    <Page className={styles.page} contentClassName={styles.content}>
      <motion.div
        className={styles.tablet}
        initial={{ opacity: 0, y: 0, scaleY: 1.5 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
      >
        <ReactSVG src={tabletSvg} />
      </motion.div>
      <Slider
        onItemChanged={handleSlideChanged}
        slides={portfolio.map((item) => (
          <ItemScreen
            key={item.id}
            heading={item.caption}
            description={item.description}
            logo={item.logo}
          />
        ))}
      />
    </Page>
  );
};

export default Portfolio;
