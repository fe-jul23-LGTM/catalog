/* eslint-disable max-len */
import { FC } from 'react';
import { Button } from '~components/UI/button';
import { IPhone } from '~types/IPhone';
import { ColorRadio } from '~components/UI/commonButtons/ColorRadio';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';
import { EPhoneColors } from '~types/EPhoneColors';
import { colors } from './data';

type TPhoneOptionsPickerProps = {
  phone: IPhone;
  selectedCapacity: string;
  handleFavouriteClick: (value: string) => void;
  selectedColor: string;
  handleColorChange: (value: EPhoneColors) => void;
};

export const PhoneOptionsPicker: FC<TPhoneOptionsPickerProps> = ({
  phone,
  selectedCapacity,
  handleFavouriteClick,
  selectedColor,
  handleColorChange,
}) => {
  return (
    <section className="">
      <div className="flex sm:flex-row-reverse justify-between flex-col-reverse">
        <div className="text-right text-secondary items-start dark:text-dark-white">{`ID: ${phone.phoneId}`}</div>
        <span>
          <p className="text-left text-secondary dark:text-dark-secondary pb-8">
            Available colors
          </p>
          <ColorRadio
            colors={colors}
            selectedColor={selectedColor}
            onSelect={handleColorChange}
          />
        </span>
      </div>
      <div className="border-b-[1px] border-elements resp-[my/24/24]"></div>
      <div className="text-xs font-normal resp-[my/8/8] resp-[font/12/12]">
        <p className="text-left text-secondary dark:text-dark-secondary">
          Select capacity
        </p>
      </div>
      <section className="flex flex-row resp-[gap-x/8/8]">
        <Button
          isSelect
          className={
            selectedCapacity === '64 GB'
              ? 'bg-primary resp-[py/7/7] resp-[px/8/8] text-white border-[2px] border-icons dark:text-dark-white dark:hover:bg-dark-accent-hover dark:shadow-none dark:bg-dark-accent'
              : 'selected'
          }
          onClick={() => handleFavouriteClick('64 GB')}
        >
          64 GB
        </Button>
        <Button
          isSelect
          className={
            selectedCapacity === '128 GB'
              ? 'bg-primary resp-[py/7/7] resp-[px/8/8] text-white border-[2px] border-icons dark:text-dark-white dark:hover:bg-dark-accent-hover dark:shadow-none dark:bg-dark-accent'
              : 'selected'
          }
          onClick={() => handleFavouriteClick('128 GB')}
        >
          128 GB
        </Button>
        <Button
          isSelect
          className={
            selectedCapacity === '256 GB'
              ? 'bg-primary resp-[py/7/7] resp-[px/8/8] text-white border-[2px] border-icons dark:text-dark-white dark:hover:bg-dark-accent-hover dark:shadow-none dark:bg-dark-accent'
              : 'selected'
          }
          onClick={() => handleFavouriteClick('256 GB')}
        >
          256 GB
        </Button>
      </section>
      <div className="block border-b-[1px] border-elements resp-[my/24/24]"></div>
      <div className="flex-row resp-[pb/16/16]">
        <div className="flex flex-row resp-[gap/8/8]">
          <p className="title-3">{`$${phone.price}`}</p>
          {phone.priceWithDiscount && (
            <p className="title-3 font-normal text-secondary dark:text-dark-secondary">
              <del>{`$${phone.price}`}</del>
            </p>
          )}
        </div>
      </div>
      <div className="flex-row items-center flex resp-[gap-x/8/8] resp-[GB/32/32]">
        <Button isAdd> Add to cart </Button>
        <button className="w-10 h-10">
          <FavouriteButton />
        </button>
      </div>
      <div className=" border-b-[1px] border-elements resp-[my/8/8]"></div>
      <div className="flex justify-between font-normal resp-[font/12/12] resp-[my/8/8]">
        <p className="text-secondary dark:text-dark-secondary">Screen</p>
        <p className="text-primary dark:text-dark-white">{`${phone.screenSize}” ${phone.typeOfDisplay}`}</p>
      </div>
      <div className="flex justify-between font-normal resp-[font/12/12]">
        <p className="text-secondary dark:text-dark-secondary">Capacity</p>
        <p className="text-primary dark:text-dark-white">{`${selectedCapacity}`}</p>
      </div>
      <div className="flex justify-between font-normal resp-[font/12/12] resp-[my/8/8]">
        <p className="text-secondary dark:text-dark-secondary">Resolution</p>
        <p className="text-primary dark:text-dark-white">{`${phone.screenResolution}`}</p>
      </div>
      <div className="flex justify-between font-normal resp-[font/12/12]">
        <p className="text-secondary dark:text-dark-secondary">Processor</p>
        <p className="text-primary dark:text-dark-white">{`${phone.processor}`}</p>
      </div>
      <div className="flex justify-between font-normal resp-[font/12/12] resp-[my/8/8]">
        <p className="text-secondary dark:text-dark-secondary">RAM</p>
        <p className="text-primary dark:text-dark-white">{`${phone.ram}`}</p>
      </div>
    </section>
  );
};
