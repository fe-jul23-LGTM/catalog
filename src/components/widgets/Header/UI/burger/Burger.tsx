/* eslint-disable max-len */
import { FC } from 'react';
import styles from './Burger.module.css';
import classNames from 'classnames';

type TBurgerProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const Burger: FC<TBurgerProps> = ({ toggleMenu, isMenuOpen }) => {
  const rotateBurgerTopStyle = classNames({
    'rotate-45 origin-top-left': isMenuOpen,
  });

  const disableBurgerMidStyle = classNames({
    'w-0': isMenuOpen,
  });

  const rotateBurgerBotStyle = classNames({
    '-rotate-45 origin-bottom-left': isMenuOpen,
  });

  const burgerStyle = classNames({
    'translate-x-[4px]': isMenuOpen,
  });

  return (
    <div onClick={toggleMenu} className={`${styles.burger} ${burgerStyle} transition-transform`}>
      <span
        className={`${styles.burgerTop} transition-transform dark:bg-dark-white ${rotateBurgerTopStyle}`}
      ></span>
      <span
        className={`${styles.burgerMid} transition-transform dark:bg-dark-white ${disableBurgerMidStyle}`}
      ></span>
      <span
        className={`${styles.burgerBot} transition-transform dark:bg-dark-white ${rotateBurgerBotStyle}`}
      ></span>
    </div>
  );
};
