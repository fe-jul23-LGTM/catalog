/* eslint-disable max-len */
import { FC } from 'react';
import { Dropdown } from '~components/UI/Dropdown';
import { ShopByCategory } from '~components/widgets/ShopByCategory';

type THomeProps = object;

// const phone = {
//   phoneId: 802390,
//   phoneName: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
//   price: 799,
//   imageSrc: a,
//   priceWithDiscount: 1000,
//   screenSize: 6,
//   typeOfDisplay: 'OLED',
//   capacity: 128,
//   ram: 6,
// };

export const Home: FC<THomeProps> = () => {
  return (
    <div>
      <ShopByCategory />
      <Dropdown/>
    </div>
  );
};
