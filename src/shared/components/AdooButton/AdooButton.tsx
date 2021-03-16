import React from 'react';
import classnames from 'classnames';
import button from './button.module.scss';
import Bordered from '~/shared/components/AdooButton/Bordered';

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
  const handleClick = async () => {
    onClick && onClick();
  };

  const containedBtn = () => (
    <button
      disabled={disabled}
      className={classnames(button.contained, className)}
      onClick={handleClick}
    >
      {caption || children}
    </button>
  );

  if (bordered)
    return (
      <Bordered
        className={className}
        caption={caption}
        onClick={onClick}
        disabled={disabled}
      />
    );
  if (contained) return containedBtn();
  return (
    <button disabled={disabled} onClick={onClick}>
      {caption}
    </button>
  );
};

export default AdooButton;
