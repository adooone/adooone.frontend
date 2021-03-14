import React from 'react';
import styles from '../scss/slide.module.scss';

const Slide: React.FC = ({ children }) => {
  return <div className={styles.slide}>{children}</div>;
};

export default Slide;
