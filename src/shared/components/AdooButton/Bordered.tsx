import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import classNames from 'classnames';
import button from './button.module.scss';
import effects from './effects.module.scss';

const effectsVariants: Variants = {
  hide: { opacity: 0 },
  appear: { opacity: 0.7 },
};

interface Props {
  caption: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Bordered: React.FC<Props> = ({
  onClick,
  children,
  caption,
  className,
  disabled,
}) => {
  const firstEffectControl = useAnimation();
  const secondEffectControl = useAnimation();

  const effectsAnimation = async () => {
    await firstEffectControl.start('appear');
    await secondEffectControl.start('appear');
    firstEffectControl.start('hide', { duration: 0.2 });
    secondEffectControl.start('hide', { duration: 0.3 });
  };

  const handleClick = () => {
    onClick && onClick();
    effectsAnimation();
  };

  return (
    <button
      disabled={disabled}
      className={classNames(button.bordered, className)}
      onClick={handleClick}
    >
      <motion.div id="effect1" className={effects.effect1} />
      <motion.div
        initial="hide"
        variants={effectsVariants}
        animate={firstEffectControl}
        transition={{ duration: 0.1 }}
        id="effect2"
        className={effects.effect2}
      />
      <motion.div
        initial="hide"
        variants={effectsVariants}
        animate={secondEffectControl}
        transition={{ duration: 0.1 }}
        id="effect3"
        className={effects.effect3}
      />
      {caption || children}
    </button>
  );
};

export default Bordered;
