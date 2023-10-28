import { FC } from 'react';
import classNames from 'classnames';

interface PageButtonProps {
  pageNumber: number;
  selected: boolean;
  onClick: () => void;
}

export const PageButton: FC<PageButtonProps> = ({
  pageNumber,
  selected,
  onClick,
}) => {
  const generalStyles = classNames(
    `resp-[width/32/32] resp-[height/32/32]
    flex items-center justify-center
    border border-elements
    dark:border-none dark:text-dark-white
    hover:border-primary
    dark:hover:bg-dark-elements
    active:bg-primary active:dark:bg-dark-accent active:text-white
    ${selected
    ? 'bg-primary dark:bg-dark-accent text-white'
    : 'dark:bg-dark-surface-1 text-black'}`,
  );

  return (
    <button
      className={generalStyles}
      onClick={onClick}
    >
      {pageNumber}
    </button>
  );
};
