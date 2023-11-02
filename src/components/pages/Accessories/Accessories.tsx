import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TAccessoriesProps = object;

export const Accessories:FC<TAccessoriesProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'accessories');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Accessoires'/>
  );
};
