/* eslint-disable max-len */
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type TButtonProps = {
  children: ReactNode;
  isAdd?: boolean;
  isSelect?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Button: FC<TButtonProps> = ({
  isAdd,
  isSelect,
  selected,
  onClick,
  children,
  disabled,
  className = '',
}) => {
  const isPressed = false;

  const generalStyles = classNames({
    'button-add': isAdd,
    'button-select': isSelect,
    selected: selected,
    'bg-white !text-green border-green solid !shadow-none dark:bg-dark-surface-2 dark:!text-dark-white dark:border-[transparent] dark:hover:bg-dark-surface-2':
      isPressed && isAdd,
    '!text-white bg-primary border-primary dark:bg-dark-white dark:!text-dark-black dark:border-white':
      isPressed && isSelect,
  });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${generalStyles} ${className}`}
    >
      {children}
    </button>
  );
};
