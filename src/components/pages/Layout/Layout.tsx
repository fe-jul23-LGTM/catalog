import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~components/widgets/Header';
import { Footer } from '~components/widgets/Footer';

import '~styles/main.css';

type TLayoutProps = object;

export const Layout: FC<TLayoutProps> = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-132px)]">
        <Header />
        <main className='container-lg'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
