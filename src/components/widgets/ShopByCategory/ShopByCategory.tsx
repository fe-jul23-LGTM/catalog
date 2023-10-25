/* eslint-disable max-len */
import { FC } from 'react';
import phones from './assets/phones.jpg';
import tablets from './assets/tablets.jpg';
import accessories from './assets/accessories.jpg';

const categories = [
  {
    title: 'Mobile phones',
    link: '/phones',
    image: phones,
    itemsCount: '71',
  },

  {
    title: 'Tablets',
    link: '/tablets',
    image: tablets,
    itemsCount: '24',
  },

  {
    title: 'Accessories',
    link: '/accessories',
    image: accessories,
    itemsCount: '100',
  },
];

export const ShopByCategory: FC = () => {
  return (
    <div className="max-w-screen-lg">
      <h2 className="title-2 resp-[mb/24/24]">Shop by category</h2>
      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-3 justify-items-center gap-x-4">
        {categories.map(category => (
          <a href={`/catalog${category.link}`} key={category.title}>
            <img
              src={category.image}
              alt=""
              className="resp-[width/368/288] resp-[mb/24/24] transform hover:scale-105 transition-transform duration-300"
            />
            <h4 className="title-4 resp-[mb/4/4]">{category.title}</h4>
            <p className="resp-[mb/80/32]">{`${category.itemsCount} models`}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
