/* eslint-disable max-len */
import { FC } from 'react';

import { BannerSlider } from '~components/widgets/BannerSlider';
import { ProductsSlider } from '~components/widgets/ProductsSlider';
import { ShopByCategory } from '~components/widgets/ShopByCategory';
import products from '~public/initial_data/products.json';

type THomeProps = object;

export const Home: FC<THomeProps> = () => {
  const hotPricesProducts = [...products].sort(
    (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
  );

  const brandNewProducts = [...products].sort(
    (a, b) => b.year - a.year,
  );

  return (
    <>
      <h1 className="title-1 py-[24px] sm:py-[32px] lg:py-[56px]">
        Welcome to Nice Gadgets store!
      </h1>
      <BannerSlider />
      <ProductsSlider
        sliderName="Brand new models"
        productsList={brandNewProducts}
      />
      <ShopByCategory />
      <ProductsSlider
        sliderName="Hot prices"
        productsList={hotPricesProducts}
      />
    </>
  );
};
