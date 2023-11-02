/* eslint-disable max-len */
import React, { FC } from 'react';
// import { ShopByCategory } from '~components/widgets/ShopByCategory';
import { Phones } from '../../widgets/PhoneInfo';
import { CardItem } from '~components/widgets/CardItem';

type THomeProps = object;

const phone = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'public/public/img/phones/apple-iphone-7/black/00.webp',
};

export const Home: FC<THomeProps> = () => {
  return <CardItem phone={phone} />;
};
