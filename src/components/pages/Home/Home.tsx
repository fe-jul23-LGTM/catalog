import React, { FC } from 'react';
// import { ShopByCategory } from '~components/widgets/ShopByCategory';
import { Phones } from '../../widgets/PhoneInfo';

type THomeProps = object;

const phone = {
  phoneId: 802390,
  phoneName: 'Apple iPhone 11 Pro Max',
  price: 799,
  imageSrc: 'catalog/src/assets/testPhone.png',
  priceWithDiscount: 1000,
  screenSize: 6,
  typeOfDisplay: 'OLED',
  capacity: 128,
  ram: 6,
  screenResolution: '2688x1242',
  processor: 'Apple A12 Bionic',
};

export const Home: FC<THomeProps> = () => {
  return (
    <div>
      <Phones phone={phone} />
    </div>
  );
};
