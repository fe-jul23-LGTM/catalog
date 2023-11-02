import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TPhonesProps = object;

export const Phones:FC<TPhonesProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'phones');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Mobile phones'/>
  );
};
