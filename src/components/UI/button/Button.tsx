/* eslint-disable max-len */
import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IProduct } from '~types/Product';
import products from '~public/initial_data/products.json';
import { ThemeContext } from '~context/Theme';

type TButtonProps = {
  children: ReactNode;
  isAdd?: boolean;
  isSelect?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  productId?: number;
};

export const Button: FC<TButtonProps> = ({
  isAdd,
  isSelect,
  children,
  disabled,
  className = '',
  productId = 0,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const { setItemsInCartCount } = useContext(ThemeContext);

  useEffect(() => {
    const itemsCartJSON = localStorage.getItem('itemsToBuy');
    const itemsCart: IProduct[] = itemsCartJSON
      ? JSON.parse(itemsCartJSON)
      : [];
    const productInCart = itemsCart.find(
      product => product.id === productId,
    );

    setIsPressed(!!productInCart);
  }, [productId]);

  const handleClickToCart = (id: number, items: IProduct[]) => {
    setIsPressed(!isPressed);

    const itemsCartJSON = localStorage.getItem('itemsToBuy');
    const itemsCart: IProduct[] = itemsCartJSON
      ? JSON.parse(itemsCartJSON)
      : [];

    const productInCart = itemsCart.find(product => product.id === id);

    if (productInCart) {
      const updatedItemsCart = itemsCart.filter(product => product.id !== id);

      localStorage.setItem('itemsToBuy', JSON.stringify(updatedItemsCart));
      setItemsInCartCount(updatedItemsCart.length);
    }

    if (!productInCart) {
      const productToBuy = items.find(product => product.id === id);

      if (productToBuy) {
        itemsCart.push(productToBuy);

        localStorage.setItem('itemsToBuy', JSON.stringify(itemsCart));
        setItemsInCartCount(itemsCart.length);
      }
    }
  };

  const generalStyles = classNames({
    'button-add': isAdd,
    'button-select': isSelect,
    'bg-white !text-green border-green solid !shadow-none dark:bg-dark-surface-2 dark:!text-dark-white dark:border-[transparent] dark:hover:bg-dark-surface-2':
      isPressed && isAdd,
    '!text-white bg-primary border-primary dark:bg-dark-white dark:!text-dark-black dark:border-white':
      isPressed && isSelect,
  });

  return (
    <button
      disabled={disabled}
      onClick={() => handleClickToCart(productId ?? 0, products)}
      className={`${generalStyles} ${className}`}
    >
      {children}
    </button>
  );
};
