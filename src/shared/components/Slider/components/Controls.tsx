import React from 'react';
import { motion } from 'framer-motion';
import styles from '../scss/slider.module.scss';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

export type DirectionType = 'forward' | 'back';

interface ControlProps {
  disableNext?: boolean;
  disablePrevious?: boolean;
  appearDelay?: number;
  onMove: (direction: DirectionType) => void;
}

const Controls: React.FC<ControlProps> = ({
  disableNext,
  disablePrevious,
  appearDelay = 1,
  onMove,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: appearDelay, ease: 'linear' }}
      className={styles.controls}
    >
      <AdooButton
        disabled={disablePrevious}
        caption="Previous"
        onClick={() => onMove('back')}
        bordered
      />
      <AdooButton
        disabled={disableNext}
        caption="Next"
        onClick={() => onMove('forward')}
        bordered
      />
    </motion.div>
  );
};

export default Controls;
