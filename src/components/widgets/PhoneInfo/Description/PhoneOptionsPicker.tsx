/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~components/UI/button';
import { ColorRadio } from '~components/UI/commonButtons/ColorRadio';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';
import { IPhoneDetailed } from '~types/IPhoneDetailed';

type TPhoneOptionsPickerProps = { phone: IPhoneDetailed };

export const PhoneOptionsPicker: FC<TPhoneOptionsPickerProps> = ({ phone }) => {
  const handleCapacityChange = (capacity: string) => {
    const tempId = phone.id.split('-');

    tempId[tempId.length - 2] = capacity.toLowerCase();

    return tempId.join('-');
  };

  const handleColorChange = (color: string) => {
    const tempId = phone.id.split('-');

    tempId[tempId.length - 1] = color;

    return tempId.join('-');
  };

  return (
    <>
      <section className="">
        <div className="flex sm:flex-row-reverse justify-between flex-col-reverse">
          <div className="text-right text-secondary items-start dark:text-dark-white">
            {`ID: ${Math.random().toString().slice(-4)}`}
          </div>
          <span>
            <p className="text-left text-secondary dark:text-dark-secondary pb-8">
              Available colors
            </p>
            <ColorRadio
              colors={phone.colorsAvailable}
              handleColorChange={handleColorChange}
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
          {phone.capacityAvailable.map(capacity => (
            <Link to={`/phones/${handleCapacityChange(capacity)}`}>
              <Button
                isSelect
                className={
                  phone.capacity === capacity
                    ? 'bg-primary resp-[py/7/7] resp-[px/8/8] text-white border-[2px] border-icons dark:text-dark-white dark:hover-bg-dark-accent-hover dark:shadow-none dark:bg-dark-accent'
                    : 'selected'
                }
                onClick={() => {
                  handleCapacityChange(capacity);
                }}
              >
                {' '}
                {capacity}{' '}
              </Button>
            </Link>
          ))}
        </section>
        <div className="block border-b-[1px] border-elements resp-[my/24/24]"></div>
        <div className="flex-row resp-[pb/16/16]">
          <div className="flex flex-row resp-[gap/8/8]">
            {phone.priceDiscount ? (
              <>
                <p className="title-3">{`$${phone.priceDiscount}`}</p>
                <p className="title-3 font-normal text-secondary dark:text-dark-secondary">
                  <del>{`$${phone.priceRegular}`}</del>
                </p>
              </>
            ) : (
              <p className="title-3">{`$${phone.priceRegular}`}</p>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center resp-[gap-x/8/8] resp-[GB/32/32]">
          <Button isAdd> Add to cart </Button>
          <FavouriteButton />
        </div>
        <div className=" border-b-[1px] border-elements resp-[my/8/8]"></div>
        <div className="flex justify-between font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Screen</p>
          <p className="text-primary dark:text-dark-white">{`${phone.screen}`}</p>
        </div>
        <div className="flex justify-between font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Capacity</p>
          <p className="text-primary dark:text-dark-white">{phone.capacity}</p>
        </div>
        <div className="flex justify-between font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Resolution</p>
          <p className="text-primary dark:text-dark-white">{`${phone.resolution}`}</p>
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
    </>
  );
};
