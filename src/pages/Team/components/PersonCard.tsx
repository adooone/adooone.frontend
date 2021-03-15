import React from 'react';
import styles from '../team.module.scss';

interface Props {
  bio: string;
  name: string;
  position: string;
}

const PersonCard: React.FC<Props> = ({ name, bio, position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}></div>
      <div className={styles.person}>
        <h4>{name}</h4>
        <p>{position}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default PersonCard;
