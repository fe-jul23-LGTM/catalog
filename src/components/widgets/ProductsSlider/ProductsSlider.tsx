import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { CardItem } from '../CardItem';

type TProductsSliderProps = {
  productsList?: [];
  sliderName: string;
};

const randomProducts = [
  {
    phoneId: 1,
    category: 'phones',
    phone: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    phoneName: 'Apple iPhone 7 32 GB Black',
    fullPrice: 400,
    price: 375,
    screenSize: 4.7,
    typeOfDisplay: 'IPS',
    capacity: 32,
    color: 'black',
    ram: 2,
    year: 2016,
    imageSrc: 'img/phones/apple-iphone-7/black/00.jpg',
  },
  {
    phoneId: 2,
    category: 'phones',
    phone: 'apple-iphone-7-plus-32gb-black',
    itemId: 'apple-iphone-7-plus-32gb-black',
    phoneName: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screenSize: 5.5,
    typeOfDisplay: 'IPS',
    capacity: 32,
    color: 'black',
    ram: 3,
    year: 2016,
    imageSrc: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  },
  {
    phoneId: 3,
    category: 'phones',
    phone: 'apple-iphone-8-64gb-gold',
    itemId: 'apple-iphone-8-64gb-gold',
    phoneName: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screenSize: 4.7,
    typeOfDisplay: 'IPS',
    capacity: 64,
    color: 'gold',
    ram: 2,
    year: 2017,
    imageSrc: 'img/phones/apple-iphone-8/gold/00.jpg',
  },
  {
    phoneId: 4,
    category: 'phones',
    phone: 'apple-iphone-11-64gb-black',
    itemId: 'apple-iphone-11-64gb-black',
    phoneName: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screenSize: 6.1,
    typeOfDisplay: 'IPS',
    capacity: 64,
    color: 'black',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11/black/00.jpg',
  },
  {
    phoneId: 5,
    category: 'phones',
    phone: 'apple-iphone-11-128gb-yellow',
    itemId: 'apple-iphone-11-128gb-yellow',
    phoneName: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    price: 1050,
    screenSize: 6.1,
    typeOfDisplay: 'IPS',
    capacity: 128,
    color: 'yellow',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11/yellow/00.jpg',
  },
  {
    phoneId: 6,
    category: 'phones',
    phone: 'apple-iphone-11-256gb-green',
    itemId: 'apple-iphone-11-256gb-green',
    phoneName: 'Apple iPhone 11 256GB Green',
    fullPrice: 1172,
    price: 1115,
    screenSize: 6.1,
    typeOfDisplay: 'IPS',
    capacity: 256,
    color: 'green',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11/green/00.jpg',
  },
  {
    phoneId: 7,
    category: 'phones',
    phone: 'apple-iphone-11-pro-64gb-gold',
    itemId: 'apple-iphone-11-pro-64gb-gold',
    phoneName: 'Apple iPhone 11 Pro 64GB Gold',
    fullPrice: 1312,
    price: 1270,
    screenSize: 5.8,
    typeOfDisplay: 'OLED',
    capacity: 64,
    color: 'gold',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro/gold/00.jpg',
  },
  {
    phoneId: 8,
    category: 'phones',
    phone: 'apple-iphone-11-pro-256gb-midnightgreen',
    itemId: 'apple-iphone-11-pro-256gb-midnightgreen',
    phoneName: 'Apple iPhone 11 Pro 256GB Midnight green',
    fullPrice: 1640,
    price: 1570,
    screenSize: 5.8,
    typeOfDisplay: 'OLED',
    capacity: 256,
    color: 'midnightgreen',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro/midnightgreen/00.jpg',
  },
  {
    phoneId: 9,
    category: 'phones',
    phone: 'apple-iphone-11-pro-512gb-silver',
    itemId: 'apple-iphone-11-pro-512gb-silver',
    phoneName: 'Apple iPhone 11 Pro 512GB Silver',
    fullPrice: 1880,
    price: 1780,
    screenSize: 5.8,
    typeOfDisplay: 'OLED',
    capacity: 512,
    color: 'silver',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro/silver/00.jpg',
  },
  {
    phoneId: 10,
    category: 'phones',
    phone: 'apple-iphone-11-pro-max-64gb-spacegray',
    itemId: 'apple-iphone-11-pro-max-64gb-spacegray',
    phoneName: 'Apple iPhone 11 Pro Max 64GB Spacegray',
    fullPrice: 1480,
    price: 1400,
    screenSize: 6.5,
    typeOfDisplay: 'OLED',
    capacity: 64,
    color: 'spacegray',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg',
  },
  {
    phoneId: 11,
    category: 'phones',
    phone: 'apple-iphone-11-pro-max-256gb-gold',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    phoneName: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screenSize: 6.5,
    typeOfDisplay: 'OLED',
    capacity: 256,
    color: 'gold',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
  {
    phoneId: 12,
    category: 'phones',
    phone: 'apple-iphone-11-pro-max-512gb-spacegray',
    itemId: 'apple-iphone-11-pro-max-512gb-spacegray',
    phoneName: 'Apple iPhone 11 Pro Max 512GB Spacegray',
    fullPrice: 2020,
    price: 1930,
    screenSize: 6.5,
    typeOfDisplay: 'OLED',
    capacity: 512,
    color: 'spacegray',
    ram: 4,
    year: 2019,
    imageSrc: 'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg',
  },
  {
    phoneId: 13,
    category: 'phones',
    phone: 'apple-iphone-xr-64gb-red',
    itemId: 'apple-iphone-xr-64gb-red',
    phoneName: 'Apple iPhone XR 64GB Red',
    fullPrice: 712,
    price: 670,
    screenSize: 6.1,
    typeOfDisplay: 'IPS',
    capacity: 64,
    color: 'red',
    ram: 3,
    year: 2018,
    imageSrc: 'img/phones/apple-iphone-xr/red/00.jpg',
  },
  {
    phoneId: 14,
    category: 'phones',
    phone: 'apple-iphone-xr-128gb-white',
    itemId: 'apple-iphone-xr-128gb-white',
    phoneName: 'Apple iPhone XR 128GB White',
    fullPrice: 880,
    price: 815,
    screenSize: 6.1,
    typeOfDisplay: 'IPS',
    capacity: 128,
    color: 'white',
    ram: 3,
    year: 2018,
    imageSrc: 'img/phones/apple-iphone-xr/white/00.jpg',
  },
  {
    phoneId: 15,
    category: 'phones',
    phone: 'apple-iphone-xs-64gb-spacegray',
    itemId: 'apple-iphone-xs-64gb-spacegray',
    phoneName: 'Apple iPhone XS 64GB Spacegray',
    fullPrice: 760,
    price: 720,
    screenSize: 5.8,
    typeOfDisplay: 'OLED',
    capacity: 64,
    color: 'spacegray',
    ram: 4,
    year: 2018,
    imageSrc: 'img/phones/apple-iphone-xs/spacegray/00.jpg',
  },
  {
    phoneId: 16,
    category: 'phones',
    phone: 'apple-iphone-xs-max-64gb-gold',
    itemId: 'apple-iphone-xs-max-64gb-gold',
    phoneName: 'Apple iPhone XS Max 64GB Gold',
    fullPrice: 960,
    price: 900,
    screenSize: 6.5,
    typeOfDisplay: 'OLED',
    capacity: 64,
    color: 'gold',
    ram: 4,
    year: 2018,
    imageSrc: 'img/phones/apple-iphone-xs-max/gold/00.jpg',
  },
];

export const ProductsSlider: FC<TProductsSliderProps> = ({
  productsList = randomProducts,
  sliderName,
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
  const buttonLeftStyles = `swipe-left ${buttonStyles}`;
  const buttonRightStyles = `swipe-right ${buttonStyles}`;

  return (
    <section className='py-[28px] sm:py-[32px] lg:py-[40px]'>
      <Swiper
      slidesPerView={'auto'}
      spaceBetween={16}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
      }}
      autoHeight
      navigation={{ nextEl: '.swipe-right', prevEl: '.swipe-left' }}
      modules={[Navigation]}
      className="mySwiper !flex !overflow-visible lg:!overflow-x-hidden
      flex-col-reverse resp-[gap-y/24/24]"
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

      {productsList.map(phone => (
        <SwiperSlide key={phone.phoneId} className="!shrink lg:!shrink-0">
          <CardItem phone={phone} products={randomProducts} />
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  );
};
