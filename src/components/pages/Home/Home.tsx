/* eslint-disable max-len */
import { FC } from 'react';

import { BannerSlider } from '~components/widgets/BannerSlider';
import { ProductsSlider } from '~components/widgets/ProductsSlider';
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
    <>
      <h1 className='title-1 py-[24px] sm:py-[32px] lg:py-[56px]'>Welcome to Nice Gadgets store!</h1>
      <BannerSlider />
      <ProductsSlider sliderName='Brand new models' />
      <ShopByCategory />
      <ProductsSlider sliderName='Hot prices' />
    </>
  );
};
