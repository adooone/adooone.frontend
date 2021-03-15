import React from 'react';
import { ReactSVG } from 'react-svg';
import { motion, Variants } from 'framer-motion';
import styles from '../../scss/screens.module.scss';

interface ItemScreenProps {
  heading: string;
  description: string;
  logo: string;
}

const ItemScreen: React.FC<ItemScreenProps> = ({
  heading,
  description,
  logo,
}) => {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
      initial="hide"
      animate="appear"
      className={styles.project}
    >
      <div className={styles.heading}>
        <ReactSVG src={logo} />
        <h3>{heading}</h3>
      </div>
      <motion.p
        variants={variantsDescription}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeIn' }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default ItemScreen;

const variants: Variants = {
  hide: { opacity: 0, y: 10 },
  appear: { opacity: 1, y: 0 },
};

const variantsDescription: Variants = {
  hide: { opacity: 0, y: 10 },
  appear: { opacity: 0.4, y: 0 },
};
