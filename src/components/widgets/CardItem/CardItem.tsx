/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '~components/UI/button';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';
import { Product } from '~types/Product';

type TPhoneCardProps = {
  product: Product;
};

export const CardItem: React.FC<TPhoneCardProps> = ({ product }) => {
  return (
    <div className="resp-[px/32/32] resp-[py/32/32] resp-[w-max/272/288] bg-[white] dark:bg-dark-surface-1 border-[1px] border-elements dark:border-dark-surface-2 cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-1000">
      <Link to={`/phones/${product.id}`}>
        <div className="transition-transform duration-1000 hover:scale-105">
          <img
            src={product.image}
            alt={product.name}
            className="resp-[w-max/208/148] resp-[height/196/129] resp-[pb/8/8] mx-auto"
          />
        </div>
        <div className="resp-[mb/8/8]">
          <p className="title-5 h-[3em]">{product.name}</p>
        </div>
        <div className="flex flex-row resp-[gap/8/8]">
          {product.price ? (
            <>
              <p className="title-3">{`$${product.price}`}</p>
              <p className="title-3 font-normal text-secondary dark:text-dark-secondary">
                <del>{`$${product.fullPrice}`}</del>
              </p>
            </>
          ) : (
            <p className="title-3">{`$${product.fullPrice}`}</p>
          )}
        </div>
        <div className="border-b-[1px] border-elements resp-[my/8/8]"></div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">Screen</p>
          <p className="text-primary dark:text-dark-white">{product.screen}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12]">
          <p className="text-secondary dark:text-dark-secondary">Capacity</p>
          <p className="text-primary dark:text-dark-white">{product.capacity}</p>
        </div>
        <div className="flex justify-between text-xs font-normal resp-[font/12/12] resp-[my/8/8]">
          <p className="text-secondary dark:text-dark-secondary">RAM</p>
          <p className="text-primary dark:text-dark-white">{product.ram}</p>
        </div>
      </Link>

      <div className="flex justify-between resp-[gap-x/8/8]">
        <Button isAdd className='resp-[width/155/100]'> Add to cart </Button>
        <FavouriteButton />
      </div>
    </div>
  );
};
