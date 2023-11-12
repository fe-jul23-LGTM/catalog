/* eslint-disable max-len */
import { FC } from 'react';

type THeaderCounterProps = {
  count: number;
};

export const HeaderCounter: FC<THeaderCounterProps> = ({ count }) => {
  return (
    <div className="absolute text-white right-[18px] top-[19px] sm:right-[8px] sm:top-[9px] lg:right-[14px] lg:top-[15px]">
      <span className="bg-red flex items-center justify-center rounded-full w-[5px] h-[5px] p-[6px] sm:p-[7px] lg:p-[8px] border text-[9px] border-white font-bold">
        {count}
      </span>
    </div>
  );
};
