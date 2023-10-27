import classNames from 'classnames';

/* eslint-disable max-len */
type TGetStyleLink = (
  isActive: boolean,
  position: string,
  isNegative?: string,
) => string;

export const getStyleLink: TGetStyleLink = (
  isActive,
  position,
  isNegative = '',
) =>
  classNames(
    `relative ${position}-[25%] ${isNegative}translate-x-2/4 py-[24px] px-[24px]`,
    {
      'after:bg-primary after:top-[0] after:left-[50%] after:-translate-x-2/4 after:w-[100px] after:h-[2px] after:absolute':
        isActive,
    },
  );
