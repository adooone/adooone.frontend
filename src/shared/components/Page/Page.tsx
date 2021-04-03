import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import './Page.scss';

interface Props {
  className?: string;
  contentClassName?: string;
  title?: string;
  transparent?: boolean;
  animation?: 'slide' | 'scale' | null;
}

const Page: React.FC<Props> = ({
  children,
  className,
  contentClassName,
  title,
  transparent,
  animation,
}) => {
  return (
    <motion.div
      initial={animation === 'slide' && { opacity: 0, x: 100 }}
      animate={animation === 'slide' && { opacity: 1, x: 0 }}
      className={classnames('page', className, { transparent })}
    >
      {title && <h2>{title}</h2>}
      <motion.div
        initial={animation === 'scale' && { opacity: 0, scale: 1.01 }}
        animate={animation === 'scale' && { opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ease: 'easeInOut' }}
        className={classnames('content', contentClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Page;
