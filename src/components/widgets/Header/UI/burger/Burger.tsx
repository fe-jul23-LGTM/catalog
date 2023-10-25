import { FC } from 'react';
import styles from './Burger.module.css';

type TBurgerProps = object;

export const Burger: FC<TBurgerProps> = () => {
  return (
    <div className={`${styles.burger}`}>
      <span className={`${styles.burgerTop} dark:bg-dark-white`}></span>
      <span className={`${styles.burgerMid} dark:bg-dark-white`}></span>
      <span className={`${styles.burgerBot} dark:bg-dark-white`}></span>
    </div>
  );
};
