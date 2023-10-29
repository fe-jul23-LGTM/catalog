import { FC } from 'react';

import styles from './SwitchButton.module.css';

type TSwitchButtonProps = {
  isDark: string;
  onClick: () => void;
  className?: string;
};

export const SwitchButton: FC<TSwitchButtonProps> = ({
  isDark = 'light-theme',
  onClick,
  className = '',
}) => (
  <label
    className={`${styles.container} ${className}`}
    title={isDark ? 'Activate dark mode' : 'Activate light mode'}
    aria-label={isDark ? 'Activate dark mode' : 'Activate light mode'}
  >
    <input
      type="checkbox"
      defaultChecked={isDark !== 'light-theme'}
      onClick={onClick}
    />
    <div />
  </label>
);
