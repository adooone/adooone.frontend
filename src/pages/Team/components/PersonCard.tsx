import classNames from 'classnames';
import React from 'react';
import styles from '../team.module.scss';

interface Props {
  bio: string;
  name: string;
  position: string;
  right: boolean;
}

const PersonCard: React.FC<Props> = ({ name, bio, position, right }) => {
  return (
    <div className={classNames(styles.card, { [styles.right]: right })}>
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
