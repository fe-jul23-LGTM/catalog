/* eslint-disable max-len */
import { FC } from 'react';
import { IPhone } from '~types/IPhone';

type TTechDescriptionProps = { phone: IPhone; selectedCapacity: string };

export const TechDescription: FC<TTechDescriptionProps> = ({
  phone,
  selectedCapacity,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="title-3 resp-[mb/16/16]">Tech specs</div>
        <div className="block border-b-[1px] border-elements w-full resp-[mb/32/32]"></div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Screen</p>
          <p className="text-primary dark:text-dark-white">{`${phone.screenSize}” ${phone.typeOfDisplay}`}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Capacity</p>
          <p className="text-primary dark:text-dark-white">{`${selectedCapacity}`}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">RAM</p>
          <p className="text-primary dark:text-dark-white">{`${phone.ram} GB`}</p>
        </div>
      </div>
    </>
  );
};
