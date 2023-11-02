/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CardItem } from '~components/widgets/CardItem';
import { IProduct } from '~types/Product';

export const Favourites: FC = () => {
  const favouritesJSON = localStorage.getItem('favorites');
  const favourites: IProduct[] = favouritesJSON
    ? JSON.parse(favouritesJSON)
    : [];

  return (
    <div className="resp-[py/40/40]">
      {favourites.length ? (
        <>
          <h1 className="title-1 resp-[mb/8/8]">Favourites</h1>
          <p className="resp-[mb/40/40]">{favourites.length} items</p>
          <section className="grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 resp-[gap-y/40/40] resp-[gap-x/16/16] justify-center">
            {favourites.map(product => (
              <div key={product.id} className="w-full">
                <CardItem product={product} />
              </div>
            ))}
          </section>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center resp-[gap-y/32/32]">
          <p className="pt-4 title-1 text-center text-secondary dark:text-dark-secondary">
            You do not have favourite<br/>products yet
          </p>
          <Link
            to="/"
            className="button-add resp-[w-max/300/300] p-5 flex justify-center"
          >
            Go to the Home page
          </Link>
        </div>
      )}
    </div>
  );
};
