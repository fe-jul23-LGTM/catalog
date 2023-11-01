/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import { IPhone } from '~types/IPhone';
import { PhoneOptionsPicker } from './Description/PhoneOptionsPicker';
import { Description } from './Description/Description';
import { TechDescription } from './Description/TechDescription';
import { PhotoSwipe } from './Description/PhotoSwipe';
import { images } from './assets/Images';
import { EPhoneColors } from '~types/EPhoneColors';
import { Link, useNavigate } from 'react-router-dom';

type TPhonesProps = {
  phone: IPhone;
};

export const Phones: FC<TPhonesProps> = ({ phone }) => {
  const [selectedCapacity, setSelectedCapacity] = useState(
    `${phone.capacity} GB`,
  );
  const [selectedColor, setSelectedColor] = useState('Cream');

  const handleFavouriteClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleColorChange = (color: EPhoneColors) => {
    setSelectedColor(color);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="resp-[px/100/16] resp-[w/1136/288]">
      <div className="flex flex-row gap-x-[8px] pt-[24px]">
        <Link to={`/`}>
          <button className="flex flex-row items-center gap-[4px]">
            <img src="src/assets/icons/home.svg" alt="home button" />
          </button>
        </Link>
        <div>
          <img
            src="src/assets/icons/arrow-right.svg"
            alt="arrow right button"
          />
        </div>
        <Link to={`/phones`}>
          <button className="flex flex-row items-center gap-[4px]">
            <p className="title-5">Phones</p>
          </button>
        </Link>
        <img src="src/assets/icons/arrow-right.svg" alt="arrow right button" />
        <div>{phone.phoneId}</div>
      </div>
      <div className="resp-[pt/40/40] resp-[pb/16/16]">
        <button
          className="flex flex-row items-center gap-[4px]"
          onClick={handleGoBack}
        >
          <img src="src/assets/icons/arrow-back.svg" alt="back button" />
          Back
        </button>
      </div>
      <h2 className="title-2 resp-[font/32/22] flex items-center justify-start resp-[pb/40/32]">
        {`${phone.phoneName} ` + ` ${selectedCapacity}` + ` ${selectedColor}`}
      </h2>
      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[65px]">
        <PhotoSwipe images={images} />
        <PhoneOptionsPicker
          phone={phone}
          selectedCapacity={selectedCapacity}
          handleFavouriteClick={handleFavouriteClick}
          selectedColor={selectedCapacity}
          handleColorChange={handleColorChange}
        />
        <Description />
        <TechDescription phone={phone} selectedCapacity={selectedCapacity} />
      </div>
    </div>
  );
};
