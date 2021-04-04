import classNames from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdooButton from '~/shared/components/AdooButton/AdooButton';
import styles from './menu.module.scss';

const LINK_START_ANIMATION_TIME = 0.3;

const Menu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.menu}>
      <AdooButton
        onClick={handleMenuButtonClick}
        className={styles.menuButton}
        caption={isOpened ? '👍' : '😎'}
      />
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            exit={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={classNames(styles.items, { [styles.opened]: isOpened })}
          >
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME }}
            >
              <Link to="/">
                <AdooButton bordered caption="HOME" />
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME + 0.2 }}
            >
              <Link to="/portfolio">
                <AdooButton bordered caption="PORTFOLIO" />
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME + 0.4 }}
            >
              <Link to="/team">
                <AdooButton bordered caption="TEAM" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;

const linkVariants: Variants = {
  appear: { y: 0, opacity: 1 },
  hide: { y: 10, opacity: 0 },
};
