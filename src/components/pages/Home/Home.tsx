import { FC } from 'react';
import { ShopByCategory } from '~components/widgets/ShopByCategory';

type THomeProps = object;

export const Home: FC<THomeProps> = () => {
  return (
    <div>
      <ShopByCategory />
    </div>
  );
};
