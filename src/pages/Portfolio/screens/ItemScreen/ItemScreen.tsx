import React from 'react';
import styles from '../../scss/screens.module.scss';

interface ItemScreenProps {
  heading: string;
  description: string;
}

const ItemScreen: React.FC<ItemScreenProps> = ({ heading, description }) => {
  return (
    <div className={styles.project}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ItemScreen;
