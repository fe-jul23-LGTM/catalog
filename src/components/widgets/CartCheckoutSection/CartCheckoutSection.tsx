import { FC } from 'react';
import { CartItem } from '../CartItem';
import { Button } from '~components/UI/button';
import '~assets/icons/arrow-down.svg';

type TCartCheckoutSection = {
  usersProductsList?: [];
  deleteFromCart?: () => void;
};

const randomProductsList = [
  {
    id: '00',
    imgPath: 'src/components/widgets/CartCheckoutSection/assets/image1.png',
    productModel: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    price: 999,
  },
  {
    id: '01',
    imgPath: 'src/components/widgets/CartCheckoutSection/assets/image2.png',
    productModel: 'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
    price: 859,
  },
  {
    id: '02',
    imgPath: 'src/components/widgets/CartCheckoutSection/assets/image3.png',
    productModel: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    price: 799,
  },
];

export const CartCheckoutSection: FC<TCartCheckoutSection> = ({
  usersProductsList = randomProductsList,
  deleteFromCart = () => {},
}) => {
  const totalPrice = usersProductsList.reduce((totalSum, elem) => {
    return totalSum + elem.price;
  }, 0);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start
    lg:resp-[gap-x/16/16] resp-[gap-y/32/32]">
      <div className="flex flex-col resp-[gap/16/16]">
        {usersProductsList.map(product => (
          <CartItem
            key={product.id}
            imgPath={product.imgPath}
            productModel={product.productModel}
            price={product.price}
            onDelete={deleteFromCart}
          />
        ))}
      </div>

      <div
        className="flex flex-col resp-[gap/16/16] color-elements
          border border-elements dark:border-dark-elements
          resp-[px/16/16] resp-[py/16/16]"
      >
        <div
          className="text-center relative after:absolute after:h-px
          after:bg-elements after:dark:bg-dark-elements after:left-0
          after:right-0 after:bottom-0 resp-[pb/16/16]
          lg:resp-[width/320/320]"
        >
          <p className="title-2">{`$${totalPrice}`}</p>

          <p>{`Total for ${usersProductsList.length} item${
            usersProductsList.length > 1 ? 's' : ''
          }`}</p>
        </div>

        <Button isAdd>Checkout</Button>
      </div>
    </div>
  );
};
