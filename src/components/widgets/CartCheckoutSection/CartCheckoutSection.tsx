/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import { CartItem } from '../CartItem';
import { Button } from '~components/UI/button';
import '~assets/icons/arrow-down.svg';
import { Link } from 'react-router-dom';

type TCartCheckoutSection = {
  usersProductsList?: [];
};

const randomProductsList = [
  {
    phoneId: 1,
    category: 'phones',
    phone: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    phoneName: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screenSize: 4.7,
    typeOfDisplay: 'IPS',
    capacity: 32,
    color: 'black',
    ram: 2,
    year: 2016,
    imageSrc: 'src/components/widgets/CartCheckoutSection/assets/image1.png',
  },
  {
    phoneId: 2,
    category: 'phones',
    phone: 'apple-iphone-7-plus-32gb-black',
    itemId: 'apple-iphone-7-plus-32gb-black',
    phoneName: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screenSize: 5.5,
    typeOfDisplay: 'IPS',
    capacity: 32,
    color: 'black',
    ram: 3,
    year: 2016,
    imageSrc: 'src/components/widgets/CartCheckoutSection/assets/image2.png',
  },
  {
    phoneId: 3,
    category: 'phones',
    phone: 'apple-iphone-8-64gb-gold',
    itemId: 'apple-iphone-8-64gb-gold',
    phoneName: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screenSize: 4.7,
    typeOfDisplay: 'IPS',
    capacity: 64,
    color: 'gold',
    ram: 2,
    year: 2017,
    imageSrc: 'src/components/widgets/CartCheckoutSection/assets/image3.png',
  },
];

export const CartCheckoutSection: FC<TCartCheckoutSection> = ({
  usersProductsList = randomProductsList,
}) => {
  const [productsList, setProductsList] = useState(
    usersProductsList.map(product => ({
      ...product,
      count: 1,
    })),
  );
  const deleteFromCart = (id: number) => {
    setProductsList(prevProducts =>
      prevProducts.filter(product => product.phoneId !== id));
  };
  const totalPrice = productsList.reduce((totalSum, elem) => {
    return totalSum + elem.price * elem.count;
  }, 0);
  const totalItems = productsList.reduce((items, product) => {
    return items + product.count;
  }, 0);
  const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
  };

  const changeCount = (id: number, newCount: number) => {
    setProductsList(prevProducts =>
      prevProducts.map(product => {
        if (product.phoneId === id) {
          product.count = newCount;
        }

        return product;
      }));
  };

  return (
    <section className="container-lg resp-[py/40/40]">
      <h1 className="title-1 resp-[mb/32/32]">Cart</h1>

      {totalItems ? (
        <div
          className="flex flex-col lg:flex-row lg:items-start
    lg:resp-[gap-x/16/16] resp-[gap-y/32/32]"
        >
          <div className="flex basis-full flex-col resp-[gap/16/16]">
            {productsList.map(product => (
              <CartItem
                key={product.itemId}
                product={product}
                setItemsCount={changeCount}
                onDelete={deleteFromCart}
              />
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col resp-[gap/16/16] color-elements
          border border-elements dark:border-dark-elements
          resp-[px/16/16] resp-[py/16/16]"
          >
            <div
              className="text-center relative after:absolute after:h-px
          after:bg-elements after:dark:bg-dark-elements after:left-0
          after:right-0 after:bottom-0 resp-[pb/16/16]"
            >
              <p className="title-2">${totalPrice}</p>

              <p>{`Total for ${totalItems} item${
                totalItems > 1 ? 's' : ''
              }`}</p>
            </div>

            <Button isAdd className='resp-[height/48/48] resp-[width/320/320]'>Checkout</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center resp-[gap-y/32/32]">
          <p className="pt-4 title-1 text-center text-secondary dark:text-dark-secondary">
            Your cart is empty
          </p>
          <Link
            to="/"
            className="button-add resp-[w-max/300/300] p-5 flex justify-center"
          >
            Go to the Home page
          </Link>
        </div>
      )}
    </section>
  );
};
