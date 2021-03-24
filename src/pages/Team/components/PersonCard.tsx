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
      <div
        className={classNames(styles.avatarContainer, {
          [styles.avRight]: avRight,
        })}
      >
        <div className={classNames(styles.circle, styles.circle1)}>
          <img src={avatar} alt="err" />
        </div>
        <div
          className={classNames(styles.circle, styles.circle2, {
            [styles.circleRight2]: right,
          })}
        ></div>
        <div
          className={classNames(styles.circle, styles.circle3, {
            [styles.circleRight3]: right,
          })}
        ></div>
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
