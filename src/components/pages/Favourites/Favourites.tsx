/* eslint-disable max-len */
import { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardItem } from '~components/widgets/CardItem';
import { ThemeContext } from '~context/Theme';
import { IProduct } from '~types/Product';
import arrowRightLight from '~assets/icons/arrow-right.svg';
import arrowRightDark from '~assets/icons/arrow-right-dark.svg';
import homeImage from '~assets/icons/home.svg';
import homeImageDark from '~assets/icons/home-dark.svg';

export const Favourites: FC = () => {
  const { setFavoriteCount } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light-theme';

  const favoritesJSON = localStorage.getItem('favorites');
  const parsedFavorites: IProduct[] = favoritesJSON
    ? JSON.parse(favoritesJSON)
    : [];

  useEffect(() => {
    setFavoriteCount(parsedFavorites.length);
  }, []);

  return (
    <div className="resp-[py/40/40]">
      {parsedFavorites.length ? (
        <>
          <div className="flex flex-row gap-x-[8px] pt-[24px] items-center">
            <Link to={`/`}>
              <button className="flex flex-row items-center gap-[4px]">
                <img src={isLightTheme ? homeImage : homeImageDark} alt="home button" />
              </button>
            </Link>
            <div>
              <img
                src={isLightTheme ? arrowRightLight : arrowRightDark}
                alt="arrow right button"
              />
            </div>
            <div className='dark:text-dark-secondary'>Favourites</div>
          </div>
          <h1 className="title-1 resp-[mb/8/8]">Favourites</h1>
          <p className="resp-[mb/40/40]">{parsedFavorites.length} items</p>
          <section className="grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 resp-[gap-y/40/40] resp-[gap-x/16/16] justify-center">
            {parsedFavorites.map(product => (
              <div key={product.id} className="w-full">
                <CardItem product={product} />
              </div>
            ))}
          </section>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center resp-[gap-y/32/32]">
          <p className="pt-4 title-1 text-center text-secondary dark:text-dark-secondary">
            You do not have favourite
            <br />
            products yet
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
