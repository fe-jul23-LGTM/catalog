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
}

export const ThemeContext = createContext<IThemeContext>({
  theme: LIGHT_THEME,
  setTheme: () => {},
  toggleTheme: () => {},
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
