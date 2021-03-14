import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

interface Props {
  bordered?: boolean;
  contained?: boolean;
  disabled?: boolean;
  caption: string;
  className?: string;
  onClick?: () => void;
}

const AdooButton: React.FC<Props> = ({
  bordered,
  contained,
  disabled,
  children,
  caption,
  onClick,
  className,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    onClick && onClick();
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  const borderedBtn = () => (
    <button
      disabled={disabled}
      className={classnames('bordered_btn', className, { clicked })}
      onClick={handleClick}
    >
      <div className="effect" />
      <div className="effect2" />
      <div className="effect3" />
      {caption || children}
    </button>
  );

  const containedBtn = () => (
    <button
      className={classnames('contained_btn', styles.contained, className, { clicked })}
      onClick={handleClick}
    >
      {caption || children}
    </button>
  );

  if (bordered) return borderedBtn();
  if (contained) return containedBtn();
  return (
    <div role="presentation" className="adoo_button" onClick={onClick}>
      {caption}
    </div>
  );
};

export default AdooButton;
