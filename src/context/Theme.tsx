import { useEffect, createContext, useState, ReactNode } from 'react';
import {
  DARK_THEME,
  DARK_THEME_MODE,
  KEY_OF_THEME,
  LIGHT_THEME,
  LIGHT_THEME_MODE,
} from '~helpers/constants';

interface IThemeContext {
  theme: string;
  setTheme: (prev: string) => void;
  toggleTheme: () => void;
  favoriteCount: number;
  setFavoriteCount: (count: number) => void;
  itemsInCartCount: number;
  setItemsInCartCount: (count: number) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: LIGHT_THEME,
  setTheme: () => {},
  toggleTheme: () => {},
  favoriteCount: 0,
  setFavoriteCount: () => {},
  itemsInCartCount: 0,
  setItemsInCartCount: () => {},
});

const getTheme = () => {
  const theme = localStorage.getItem(KEY_OF_THEME);

  if (!theme) {
    localStorage.setItem(KEY_OF_THEME, LIGHT_THEME);

    return LIGHT_THEME;
  }

  return theme;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [itemsInCartCount, setItemsInCartCount] = useState(0);

  function toggleTheme() {
    if (theme === DARK_THEME) {
      setTheme(LIGHT_THEME);
      document.documentElement.classList.remove(DARK_THEME_MODE);

      return;
    }

    document.documentElement.classList.add(DARK_THEME_MODE);
    setTheme(DARK_THEME);
  }

  useEffect(() => {
    localStorage.setItem(KEY_OF_THEME, theme);

    document.documentElement.classList.add(
      theme === LIGHT_THEME ? LIGHT_THEME_MODE : DARK_THEME_MODE,
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        favoriteCount,
        setFavoriteCount,
        itemsInCartCount,
        setItemsInCartCount,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
