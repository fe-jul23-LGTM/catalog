import classNames from 'classnames';

/* eslint-disable max-len */
export const styleForCurrentLink = ({ isActive }: { isActive: boolean }) =>
  classNames('dark:after:bg-dark-white', {
    'relative dark:text-dark-white text-primary pb-[17px] lg:pb-[24px] after:absolute after:w-full after:h-[3px] after:bg-primary after:bottom-0 after:left-0':
      isActive,
  });

export const favoriteNCartStyles = ({ isActive }: { isActive: boolean }) =>
  classNames(
    'relative block sm:py-[16px] sm:px-[16px] lg:px-[24px] lg:py-[24px]',
    {
      'text-primary pb-[17px] lg:pb-[24px] after:absolute after:left-0 dark:after:bg-dark-white after:right-0 after:h-[3px] after:bg-primary after:bottom-0 after:left-0':
        isActive,
    },
  );
