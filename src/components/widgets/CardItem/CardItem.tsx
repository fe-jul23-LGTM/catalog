/* eslint-disable max-len */
import React, { useState } from 'react';
import { Button } from '~components/UI/button';
import { Phone } from '../../../../types/IPhone';
import { Link } from 'react-router-dom';

type TPhoneCardProps = {
  phone: Phone;
};

export const CardItem: React.FC<TPhoneCardProps> = ({ phone }) => {
  const [isFavouriteActive, setIsFavouriteActive] = useState(false);
  const handleFavouriteClick = () => {
    setIsFavouriteActive(!isFavouriteActive);
  };

  return (
    <Link to="/phones">
      <div className="resp-[px/32/32] resp-[py/32/32] resp-[w-max/272/288] bg-[white] dark:bg-dark-surface-1 border-[1px] border-elements dark:border-dark-surface-2 cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-1000">
        <div className="transition-transform duration-1000 hover:scale-105">
          <img
            src="catalog/src/assets/icons/phone-photo.svg"
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

        <div className="justify-between flex resp-[gap-x/8/8]">
          <Button isAdd> Add to cart </Button>
          <button className="w-10 h-10" onClick={handleFavouriteClick}>
            {isFavouriteActive ? (
              <img
                src="catalog/src/assets/icons/favourites.svg"
                alt="icon"
                className="w-full h-full"
              />
            ) : (
              <img
                src="catalog/src/assets/icons/favourites.svg"
                alt="icon"
                className="w-full h-full"
              />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};
