import { FC } from 'react';
import { Header } from '~components/widgets/Header';

import '~styles/main.css';

type TIndexProps = object;

export const App: FC<TIndexProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
