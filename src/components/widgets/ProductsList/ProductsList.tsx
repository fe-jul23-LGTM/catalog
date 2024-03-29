/* eslint-disable max-len */
import { FC } from 'react';
import { IPhone } from '~types/IPhone';
import { CardItem } from '../CardItem';

type TProductsListProps = {
  productsList?: IPhone[];
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
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
    imageSrc: './src/components/widgets/ProductsList/assets/image1.png',
  },
];

export const ProductsList: FC<TProductsListProps> = ({
  productsList = randomProducts,
}) => {
  return (
    <section className='container-lg grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 resp-[gap-y/40/40] resp-[gap-x/16/16]'>
      {productsList.map(product => (
        <CardItem phone={product} />
      ))}
    </section>
  );
};
