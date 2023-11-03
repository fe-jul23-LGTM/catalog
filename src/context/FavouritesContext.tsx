import { useEffect, createContext, useState, ReactNode } from 'react';
import { IProduct } from '~types/Product';

interface IFavouritesContext {
  favorites: IProduct[],
  setFavorites: (favorites: IProduct[]) => void;
}

export const FavouritesContext = createContext<IFavouritesContext>({
  favorites: [], setFavorites: () => {},
});

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites') ?? ''),
  );

  useEffect(() => {
    localStorage.setItem('favorites', favorites);
  }, [favorites]);

  return (
    <FavouritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
