/* eslint-disable max-len */
import { FC } from 'react';
import { IPhoneDetailed } from '~types/IPhoneDetailed';

type TTechDescriptionProps = {
  phone: IPhoneDetailed;
  selectedCapacity?: string;
};

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
          <p className="text-primary dark:text-dark-white">{phone.screen}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Resolution</p>
          <p className="text-primary dark:text-dark-white">
            {phone.resolution}
          </p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Processor</p>
          <p className="text-primary dark:text-dark-white">{phone.processor}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">RAM</p>
          <p className="text-primary dark:text-dark-white">{phone.ram}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Camera</p>
          <p className="text-primary dark:text-dark-white">{phone.camera}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Zoom</p>
          <p className="text-primary dark:text-dark-white">{phone.zoom}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Cell</p>
          <p className="text-primary dark:text-dark-white">
            {phone.cell.join(' ')}
          </p>
        </div>
      </div>
    </>
  );
};
