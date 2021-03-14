import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import './Page.scss';

interface Props {
  className?: string;
  contentClassName?: string;
  title?: string;
  transparent?: boolean;
}

const Page: React.FC<Props> = ({ children, className, contentClassName, title, transparent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className={classnames('page', className, { transparent })}
    >
      {title && <h2>{title}</h2>}
      <motion.div
        initial={{ opacity: 0, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ease: 'easeInOut' }}
        className={classnames('content', contentClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Page;
