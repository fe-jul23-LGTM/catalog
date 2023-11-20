/* eslint-disable max-len */
import React, { FC, useContext, useEffect, useState } from 'react';
import { CartItem } from '../CartItem';
import '~assets/icons/arrow-down.svg';
import { Link } from 'react-router-dom';
import { IProduct } from '~types/Product';
import { CheckoutModal } from './CheckoutModal';
import { ThemeContext } from '~context/Theme';
import arrowLeftBlack from '~assets/icons/arrow-left-black.svg';
import arrowLeftWhite from '~assets/icons/arrow-left-white.svg';

export const CartCheckoutSection: FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
  const { setItemsInCartCount } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light-theme';

  const itemsCartJSON = localStorage.getItem('itemsToBuy');
  const itemsCart: IProduct[] = itemsCartJSON ? JSON.parse(itemsCartJSON) : [];

  useEffect(() => {
    setProductsList(itemsCart.map(product => ({
      ...product,
      count: 1,
    })));

    setItemsInCartCount(itemsCart.length);
  }, []);

  const [productsList, setProductsList] = useState(
    itemsCart.map(product => ({
      ...product,
      count: 1,
    })),
  );

  const deleteFromCart = (id: number) => {
    setIsPressed(!isPressed);

    const productInCart = productsList.find(product => product.id === id);

    if (productInCart) {
      const updatedItemsCart = productsList.filter(product => product.id !== id);

      localStorage.setItem('itemsToBuy', JSON.stringify(updatedItemsCart));
      setProductsList(updatedItemsCart);
      setItemsInCartCount(updatedItemsCart.length);
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

  const handeClickCheckout = () => {
    localStorage.setItem(
      'itemsToBuy',
      JSON.stringify([]),
    );
    setItemsInCartCount(0);
    setProductsList([]);
    setIsCheckoutClicked(true);
  };

  return (
    <section className="resp-[py/40/40]">
      {totalItems ? (
        <>
          <div className="flex flex-row gap-x-[8px] pt-[24px] items-center">
            <Link to={`/`}>
              <button className="flex flex-row items-center gap-[4px]">
                <img
                  src={isLightTheme ? arrowLeftBlack : arrowLeftWhite}
                  alt="arrow left button"
                />
              </button>
            </Link>
            <div className="dark:text-dark-white">Back</div>
          </div>
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

              <button
                className="button-add resp-[height/48/48] lg:resp-[width/320/320]"
                onClick={handeClickCheckout}
              >
                Checkout
              </button>
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

      {isCheckoutClicked && (
        <CheckoutModal
          isCheckoutClicked={isCheckoutClicked}
          setIsCheckoutClicked={setIsCheckoutClicked}
        />
      )}
    </section>
  );
};
