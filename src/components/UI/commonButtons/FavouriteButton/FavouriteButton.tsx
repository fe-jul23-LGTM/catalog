/* eslint-disable max-len */
import { FC, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IProduct } from '~types/Product';
import products from '~public/initial_data/products.json';
import { ThemeContext } from '~context/Theme';

type TFavouriteButtonProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  productId?: number;
};

export const FavouriteButton: FC<TFavouriteButtonProps> = ({
  selected = false,
  className = '',
  productId = 0,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setFavoriteCount } = useContext(ThemeContext);
  const generalStyles = classNames(
    className,
    'w-[40px] h-[40px] flex items-center justify-center border transition-[border] duration-300',
    {
      'border-elements dark:border-dark-elements': selected,
      'bg-white border-icons dark:border-none dark:bg-dark-elements hover:border-primary dark:hover:bg-dark-icons':
        !selected,
    },
  );

  const heartStyles = 'fill-primary dark:fill-white';

  useEffect(() => {
    const favoritesJSON = localStorage.getItem('favorites');
    const favorites: IProduct[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
    const productInFavourites = favorites.find(
      product => product.id === productId,
    );

    setIsClicked(!!productInFavourites);
  }, [productId]);

  const handleClickFavourite = (id: number, items: IProduct[]) => {
    setIsClicked(!isClicked);

    const favoritesJSON = localStorage.getItem('favorites');
    const favorites: IProduct[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    const productInFavourites = favorites.find(
      product => product.id === id,
    );

    if (productInFavourites) {
      const updatedFavourites = favorites.filter(
        product => product.id !== id,
      );

      localStorage.setItem('favorites', JSON.stringify(updatedFavourites));
      setFavoriteCount(updatedFavourites.length);
    }

    if (!productInFavourites) {
      const productToAdd = items.find(product => product.id === id);

      if (productToAdd) {
        favorites.push(productToAdd);

        localStorage.setItem('favorites', JSON.stringify(favorites));
        setFavoriteCount(favorites.length);
      }
    }
  };

  return (
    <button
      className={generalStyles}
      onClick={() => handleClickFavourite(productId, products)}
    >
      {isClicked ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3 1.29877C10.7264 1.29877 10.1584 1.41178 9.62852 1.63136C9.09865 1.85091 8.61711 2.17281 8.21162 2.57846L8.00005 2.79003L7.78835 2.57834C6.96928 1.75927 5.85839 1.29912 4.70005 1.29912C3.54171 1.29912 2.43081 1.75927 1.61174 2.57834C0.792668 3.39741 0.33252 4.50831 0.33252 5.66665C0.33252 6.82499 0.792668 7.93589 1.61174 8.75496L7.50507 14.6483C7.77844 14.9217 8.22165 14.9217 8.49502 14.6483L14.3884 8.75496C14.794 8.34947 15.1158 7.86805 15.3353 7.33817C15.5549 6.80825 15.6679 6.24026 15.6679 5.66665C15.6679 5.09304 15.5549 4.52505 15.3353 3.99513C15.1158 3.46531 14.7941 2.98392 14.3885 2.57846C13.983 2.17276 13.5015 1.85093 12.9716 1.63136C12.4416 1.41178 11.8737 1.29877 11.3 1.29877Z"
            fill="#EB5757"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={heartStyles}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.62852 1.63137C10.1584 1.4118 10.7264 1.29878 11.3 1.29878C11.8737 1.29878 12.4416 1.4118 12.9716 1.63137C13.5015 1.85094 13.983 2.17277 14.3885 2.57847C14.7941 2.98394 15.1158 3.46532 15.3353 3.99514C15.5549 4.52506 15.6679 5.09305 15.6679 5.66667C15.6679 6.24028 15.5549 6.80827 15.3353 7.33819C15.1158 7.86806 14.794 8.34949 14.3884 8.75497C14.3883 8.75501 14.3884 8.75493 14.3884 8.75497L8.49502 14.6483C8.22165 14.9217 7.77844 14.9217 7.50507 14.6483L1.61174 8.75497C0.792668 7.9359 0.33252 6.82501 0.33252 5.66667C0.33252 4.50833 0.792668 3.39743 1.61174 2.57836C2.43081 1.75929 3.54171 1.29914 4.70005 1.29914C5.85839 1.29914 6.96928 1.75929 7.78835 2.57836L8.00005 2.79005L8.21162 2.57847C8.21158 2.57851 8.21166 2.57844 8.21162 2.57847C8.61711 2.17283 9.09865 1.85092 9.62852 1.63137ZM13.3983 3.56819C13.1228 3.29256 12.7957 3.07392 12.4357 2.92474C12.0756 2.77556 11.6898 2.69878 11.3 2.69878C10.9103 2.69878 10.5245 2.77556 10.1644 2.92474C9.80441 3.07392 9.4773 3.29256 9.2018 3.56819L8.49502 4.27497C8.22165 4.54834 7.77844 4.54834 7.50507 4.27497L6.7984 3.56831C6.24189 3.01179 5.48708 2.69914 4.70005 2.69914C3.91301 2.69914 3.15821 3.01179 2.60169 3.56831C2.04517 4.12483 1.73252 4.87963 1.73252 5.66667C1.73252 6.4537 2.04517 7.20851 2.60169 7.76502L8.00005 13.1634L13.3984 7.76502C13.674 7.48953 13.8928 7.16231 14.042 6.80228C14.1911 6.44226 14.2679 6.05637 14.2679 5.66667C14.2679 5.27696 14.1911 4.89107 14.042 4.53105C13.8928 4.17103 13.6739 3.84369 13.3983 3.56819Z"
          />
        </svg>
      )}
    </button>
  );
};
