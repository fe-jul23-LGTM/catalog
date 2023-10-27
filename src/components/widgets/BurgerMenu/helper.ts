/* eslint-disable max-len */
import classNames from 'classnames';

type TGetStyleLink = (
  isActive: boolean,
  position: string,
  isNegative?: string,
) => string;

export const getStyleLink: TGetStyleLink = (isActive, position, isNegative) =>
  classNames(`relative ${position} ${isNegative} py-[24px] px-[24px]`, {
    'after:bg-primary after:top-[0] after:left-[50%] after:-translate-x-2/4 after:w-[100px] after:h-[2px] after:absolute':
      isActive,
  });
