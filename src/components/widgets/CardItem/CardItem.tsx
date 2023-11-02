/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '~components/UI/button';
import { IPhone } from '~types/IPhone';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';

type TPhoneCardProps = {
  phone: IPhone;
  products: IPhone[];
};

export const CardItem: React.FC<TPhoneCardProps> = ({ phone, products }) => {
  return (
    <div className="m-auto resp-[px/32/32] resp-[py/32/32] resp-[w-max/272/288] bg-[white] dark:bg-dark-surface-1 border-[1px] border-elements dark:border-dark-surface-2 cursor-pointer hover:shadow-md transition-shadow duration-300">
      <Link to={`/phones/${phone.phoneId}`}>
        <div className="transition-transform duration-1000">
          <img
            src={phone.imageSrc}
            alt={`${phone.phoneName}`}
            className="resp-[w-max/208/148] resp-[h-max/196/129] resp-[pb/8/8] mx-auto"
          />
        </div>
        <div className="resp-[mb/8/8]">
          <p className="title-5">{`${phone.phoneName}`}</p>
        </div>
        <div className="flex flex-row resp-[gap/8/8]">
          <p className="title-3">{`$${phone.price}`}</p>
          {phone.priceWithDiscount && (
            <p className="title-3 font-normal text-secondary dark:text-dark-secondary">
              <del>{`$${phone.price}`}</del>
            </p>
          )}
        </div>
        <div className="border-b-[1px] border-elements resp-[my/8/8]"></div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Screen</p>
          <p className="text-primary dark:text-dark-white">{`${phone.screenSize}” ${phone.typeOfDisplay}`}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Capacity</p>
          <p className="text-primary dark:text-dark-white">{`${phone.capacity} GB`}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">RAM</p>
          <p className="text-primary dark:text-dark-white">{`${phone.ram} GB`}</p>
        </div>
      </Link>

      <div className="justify-between flex resp-[gap-x/8/8]">
        <Button className="w-[193px]" isAdd>
          Add to cart
        </Button>
        <FavouriteButton products={products} productId={phone.phoneId} />
      </div>
    </div>
  );
};
