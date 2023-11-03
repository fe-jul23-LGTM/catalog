import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TTabletsProps = object;

export const Tablets:FC<TTabletsProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'tablets');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Tablets'/>
  );
};
