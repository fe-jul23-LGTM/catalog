import { FC } from 'react';
import { CartCheckoutSection } from '~components/widgets/CartCheckoutSection';
import { Header } from '~components/widgets/Header';

import '~styles/main.css';

type TIndexProps = object;

export const App: FC<TIndexProps> = () => {
  return (
    <div>
      <Header />
      <CartCheckoutSection />
    </div>
  );
};
