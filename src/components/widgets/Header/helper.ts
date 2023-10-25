import classNames from 'classnames';

/* eslint-disable max-len */
export const styleForCurrentLink = ({ isActive }: { isActive: boolean }) =>
  classNames({
    'relative text-primary pb-[17px] lg:pb-[24px] after:absolute after:w-full after:h-[3px] after:bg-primary after:bottom-0 after:left-0': isActive,
  });
