import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type TButtonProps = {
  children: ReactNode;
  isAdd?: boolean;
  isSelect?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<TButtonProps> = ({
  isAdd,
  isSelect,
  onClick,
  children,
  disabled,
}) => {
  // context
  const isPressed = false;

  const generalStyles = classNames({
    'button-add': isAdd,
    'button-select': isSelect,
    // eslint-disable-next-line max-len
    'bg-white !text-green border-green solid !shadow-none dark:bg-dark-surface-2 dark:!text-dark-white dark:border-[transparent] dark:hover:bg-dark-surface-2':
      isPressed && isAdd,
    // eslint-disable-next-line max-len
    '!text-white bg-primary border-primary dark:bg-dark-white dark:!text-dark-black dark:border-white':
      isPressed && isSelect,
  });

  return (
    <button disabled={disabled} onClick={onClick} className={`${generalStyles}`}>
      {children}
    </button>
  );
};
