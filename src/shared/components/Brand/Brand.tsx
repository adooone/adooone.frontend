import classNames from 'classnames';
import React from 'react';
import styles from './branding.module.scss';

interface Props {
  avatar?: string;
}

const Branding: React.FC<Props> = (avatar) => {
  return (
    <div className={styles.branding}>
      <div className={classNames(styles.circle, styles.circle1)}>
        {/* {avatar && <img src={avatar} alt="err" />} */}
      </div>
      <div className={classNames(styles.circle, styles.circle2)}></div>
      <div className={classNames(styles.circle, styles.circle3)}></div>
    </div>
  );
};

export default Branding;
