import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~components/widgets/Header';

import '~styles/main.css';

type TLayoutProps = object;

export const Layout: FC<TLayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
