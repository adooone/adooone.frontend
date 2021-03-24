import classNames from 'classnames';
import React from 'react';
import styles from '../team.module.scss';

interface Props {
  bio: string;
  name: string;
  position: string;
  right: boolean;
  avRight: boolean;
  avatar: string;
}

const PersonCard: React.FC<Props> = ({
  name,
  bio,
  position,
  right,
  avRight,
  avatar,
}) => {
  return (
    <div className={classNames(styles.card, { [styles.right]: right })}>
      <div className={classNames(styles.avatar, { [styles.avRight]: avRight })}>
        <img src={avatar} alt="err" />
      </div>
      <div className={styles.person}>
        <h4>{name}</h4>
        <p className={styles.position}>{position}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

export default PersonCard;
