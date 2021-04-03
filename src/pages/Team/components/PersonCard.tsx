import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import styles from '../team.module.scss';
import Branding from '~/shared/components/Brand';

interface Props {
  index: number;
  bio: string;
  name: string;
  position: string;
  right: boolean;
  avRight: boolean;
  avatar?: string;
}

const PersonCard: React.FC<Props> = ({
  index,
  name,
  bio,
  position,
  right,
  avRight,
  avatar,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.2, ease: 'easeInOut', duration: 1 }}
      className={classNames(styles.card, { [styles.right]: right })}
    >
      <div
        className={classNames(styles.avatarContainer, {
          [styles.avRight]: avRight,
        })}
      >
        <Branding />
        {avatar && <img src={avatar} alt="err" />}
      </div>
      <div className={styles.person}>
        <h4>{name}</h4>
        <p className={styles.position}>{position}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </motion.div>
  );
};

export default PersonCard;
