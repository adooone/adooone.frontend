import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { viewState } from '~/core/store/atoms/view';
import styles from './background.module.scss';

const AppBackground: React.FC = () => {
  const backgroundControls = useAnimation();
  const { page } = useRecoilValue(viewState);

  useEffect(() => {
    if (page === '/')
      backgroundControls.start({
        opacity: 1,
        x: 0,
      });
    else
      backgroundControls.start({
        opacity: 0,
        x: -10,
      });
  }, [page]);

  const handleImageLoaded = () => {
    if (page === '/')
      backgroundControls.start({
        opacity: 1,
        scale: 1,
      });
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={backgroundControls}
        transition={{ ease: 'linear', duration: 0.2 }}
        className={styles.image}
      >
        <img
          onLoad={handleImageLoaded}
          src="https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/andrew-shiau-P2HGU-mNOvg-unsplash.jpg?alt=media&token=9298a6ef-9033-4eaf-aa52-82aae1f39ca1"
          alt="error"
        />
        <div className={styles.effect} />
      </motion.div>
    </div>
  );
};

export default AppBackground;
