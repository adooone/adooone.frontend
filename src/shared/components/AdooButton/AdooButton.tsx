import React, { useState } from 'react';
import classnames from 'classnames';

interface Props {
  bordered?: boolean;
  contained?: boolean;
  caption: string;
  className?: string;
  onClick?: () => void;
}

const AdooButton: React.FC<Props> = ({
  bordered,
  contained,
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
    <div
      role="presentation"
      className={classnames('bordered_btn', className, { clicked })}
      onClick={handleClick}
    >
      <div className="effect" />
      <div className="effect2" />
      <div className="effect3" />
      {caption || children}
    </div>
  );
  const containedBtn = () => (
    <div
      role="presentation"
      className={classnames('contained_btn', className, { clicked })}
      onClick={handleClick}
    >
      {caption || children}
    </div>
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
