/* eslint-disable max-len */
import { FC } from 'react';
import { CardItem } from '~components/widgets/CardItem';
import { IPhone } from '~types/IPhone';

export const Favourites: FC = () => {
  const favouritesJSON = localStorage.getItem('favorites');
  const favourites: IPhone[] = favouritesJSON
    ? JSON.parse(favouritesJSON)
    : [];

  return (
    <div>
      <h1 className="title-1 resp-[mb/8/8]">Favourites</h1>
      <p className="resp-[mb/40/40]">{favourites.length} items</p>
      <section className="grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 resp-[gap-y/40/40] resp-[gap-x/16/16] justify-center">
        {favourites.map(product => (
          <div key={product.phoneId} className="w-full">
            <CardItem phone={product} products={favourites} />
          </div>
        ))}
      </section>
    </div>
  );
};
