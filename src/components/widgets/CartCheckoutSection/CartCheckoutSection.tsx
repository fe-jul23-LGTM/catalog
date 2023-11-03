/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import { CartItem } from '../CartItem';
import { Button } from '~components/UI/button';
import '~assets/icons/arrow-down.svg';
import { Link } from 'react-router-dom';
import { IProduct } from '~types/Product';

export const CartCheckoutSection: FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const itemsCartJSON = localStorage.getItem('itemsToBuy');
  const itemsCart: IProduct[] = itemsCartJSON ? JSON.parse(itemsCartJSON) : [];

  const [productsList, setProductsList] = useState(
    itemsCart.map(product => ({
      ...product,
      count: 1,
    })),
  );
  const deleteFromCart = (id: number) => {
    setIsPressed(!isPressed);

    const productInCart = itemsCart.find(product => product.id === id);

    if (productInCart) {
      const updatedItemsCart = itemsCart.filter(product => product.id !== id);

      localStorage.setItem('itemsToBuy', JSON.stringify(updatedItemsCart));

      if (window.location.hash === '#/cart') {
        window.location.reload();
      }
    }
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
        if (product.id === id) {
          product.count = newCount;
        }

        return product;
      }));
  };

  return (
    <section className="resp-[py/40/40]">
      {totalItems ? (
        <>
          <h1 className="title-1 resp-[mb/32/32]">Cart</h1>
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

              <Button
                productId={0}
                isAdd
                className="resp-[height/48/48] resp-[width/320/320]"
              >
                Checkout
              </Button>
            </form>
          </div>
        </>
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
