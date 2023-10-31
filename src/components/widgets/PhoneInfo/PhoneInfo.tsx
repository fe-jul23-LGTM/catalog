/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import { IPhone } from '~types/IPhone';
import { PhoneOptionsPicker } from './Description/PhoneOptionsPicker';
import { Description } from './Description/Description';
import { TechDescription } from './Description/TechDescription';
import { PhotoSwipe } from './Description/PhotoSwipe';
import { images } from './assets/Images';
import { EPhoneColors } from '~types/EPhoneColors';

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

  return (
    <div className="resp-[px/100/16] resp-[w/1136/288]">
      <h2 className="title-2 resp-[font/32/22] flex items-center justify-start resp-[pb/40/32]">
        {`${phone.phoneName} ` + ` ${selectedCapacity}` + ` ${selectedColor}`}
      </h2>
      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-2 gap-x-[80px] gap-y-[65px]">
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
