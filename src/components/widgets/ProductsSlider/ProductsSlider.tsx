import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { CardItem } from '../CardItem';
import { IProduct } from '~types/Product';

type TProductsSliderProps = {
  productsList: IProduct[];
  sliderName: string;
};

const randomProducts = [
  {
    id: 8,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-256gb-midnightgreen',
    name: 'Apple iPhone 11 Pro 256GB Midnight green',
    fullPrice: 1640,
    price: 1570,
    screen: "5.8' OLED",
    capacity: '256GB',
    color: 'midnightgreen',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/midnightgreen/00.webp',
  },
  {
    id: 9,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-512gb-silver',
    name: 'Apple iPhone 11 Pro 512GB Silver',
    fullPrice: 1880,
    price: 1780,
    screen: "5.8' OLED",
    capacity: '512GB',
    color: 'silver',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/silver/00.webp',
  },
  {
    id: 10,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-max-64gb-spacegray',
    name: 'Apple iPhone 11 Pro Max 64GB Spacegray',
    fullPrice: 1480,
    price: 1400,
    screen: "6.5' OLED",
    capacity: '64GB',
    color: 'spacegray',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
  },
  {
    id: 11,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screen: "6.5' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.webp',
  },
  {
    id: 12,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-max-512gb-spacegray',
    name: 'Apple iPhone 11 Pro Max 512GB Spacegray',
    fullPrice: 2020,
    price: 1930,
    screen: "6.5' OLED",
    capacity: '512GB',
    color: 'spacegray',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
  },
  {
    id: 13,
    category: 'phones',
    itemId: 'apple-iphone-xr-64gb-red',
    name: 'Apple iPhone XR 64GB Red',
    fullPrice: 712,
    price: 670,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'red',
    ram: '3GB',
    year: 2018,
    image: 'img/phones/apple-iphone-xr/red/00.webp',
  },
  {
    id: 14,
    category: 'phones',
    itemId: 'apple-iphone-xr-128gb-white',
    name: 'Apple iPhone XR 128GB White',
    fullPrice: 880,
    price: 815,
    screen: "6.1' IPS",
    capacity: '128GB',
    color: 'white',
    ram: '3GB',
    year: 2018,
    image: 'img/phones/apple-iphone-xr/white/00.webp',
  },
  {
    id: 15,
    category: 'phones',
    itemId: 'apple-iphone-xs-64gb-spacegray',
    name: 'Apple iPhone XS 64GB Spacegray',
    fullPrice: 760,
    price: 720,
    screen: "5.8' OLED",
    capacity: '64GB',
    color: 'spacegray',
    ram: '4GB',
    year: 2018,
    image: 'img/phones/apple-iphone-xs/spacegray/00.webp',
  },
  {
    id: 16,
    category: 'phones',
    itemId: 'apple-iphone-xs-max-64gb-gold',
    name: 'Apple iPhone XS Max 64GB Gold',
    fullPrice: 960,
    price: 900,
    screen: "6.5' OLED",
    capacity: '64GB',
    color: 'gold',
    ram: '4GB',
    year: 2018,
    image: 'img/phones/apple-iphone-xs-max/gold/00.webp',
  },
  {
    id: 17,
    category: 'phones',
    itemId: 'apple-iphone-xs-max-256gb-silver',
    name: 'Apple iPhone XS Max 256GB Silver',
    fullPrice: 1080,
    price: 1000,
    screen: "6.5' OLED",
    capacity: '256GB',
    color: 'silver',
    ram: '4GB',
    year: 2018,
    image: 'img/phones/apple-iphone-xs-max/silver/00.webp',
  },
  {
    id: 18,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-gold',
    name: 'Apple iPhone 7 32GB Gold',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'gold',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/gold/00.webp',
  },
  {
    id: 19,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-silver',
    name: 'Apple iPhone 7 Plus 32GB Silver',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'silver',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/silver/00.webp',
  },
  {
    id: 20,
    category: 'phones',
    itemId: 'apple-iphone-8-64gb-spacegray',
    name: 'Apple iPhone 8 64GB Space Gray',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'spacegray',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/spacegray/00.webp',
  },
];

export const ProductsSlider: FC<TProductsSliderProps> = ({
  productsList = randomProducts,
  sliderName = 'Random slider name',
}) => {
  const buttonStyles = `resp-[width/32/32] resp-[height/32/32]
    flex items-center justify-center border
    dark:text-gray-white disabled:bg-none
    disabled:border-elements disabled:dark:border-dark-elements
    disabled:bg-none disabled:border-icons
    disabled:dark:border-none disabled:dark:bg-dark-elements
    hover:border-primary hover:text-gray-white
    dark:hover:bg-dark-icons
    disabled:fill-icons
    dark:fill-dark-white dark:disabled:fill-dark-icons`;
  const buttonLeftStyles = `swipe-prod-left ${buttonStyles}`;
  const buttonRightStyles = `swipe-prod-right ${buttonStyles}`;

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={16}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
      }}
      autoHeight
      navigation={{ nextEl: '.swipe-prod-right', prevEl: '.swipe-prod-left' }}
      modules={[Navigation]}
      className="mySwiper !flex !overflow-y-visible
      flex-col-reverse resp-[gap-y/24/24] !resp-[py/40/28]"
    >
      <div className="flex justify-between items-center resp-[gap-x/72/72]">
        <p className="title-2">{sliderName}</p>
        <div className="flex resp-[gap/16/16]">
          <button
            type="button"
            aria-label="arrow-left"
            className={buttonLeftStyles}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4715 3.52861C10.2111 3.26826 9.78903
                  3.26826 9.52868 3.52861L5.52868
                  7.52861C5.26833 7.78896
                  5.26833 8.21107 5.52868
                  8.47141L9.52868 12.4714C9.78903
                  12.7318 10.2111 12.7318 10.4715
                  12.4714C10.7318 12.2111 10.7318 11.789
                  10.4715 11.5286L6.94289 8.00001L10.4715
                  4.47141C10.7318 4.21107 10.7318 3.78896
                  10.4715 3.52861Z"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="arrow-right"
            className={buttonRightStyles}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.52876 3.52861C5.78911 3.26826 6.21122
                  3.26826 6.47157 3.52861L10.4716 7.52861C10.7319
                  7.78896 10.7319 8.21107 10.4716 8.47141L6.47157
                  12.4714C6.21122 12.7318 5.78911 12.7318 5.52876
                  12.4714C5.26841 12.2111 5.26841 11.789 5.52876
                  11.5286L9.05735 8.00001L5.52876 4.47141C5.26841
                  4.21107 5.26841 3.78896 5.52876 3.52861Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {productsList.map(product => (
        <SwiperSlide key={product.itemId} className="resp-[w-max/272/212]">
          <CardItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
