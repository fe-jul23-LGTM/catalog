/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { FC } from 'react';
import { IProduct } from '~types/Product';

type TCartItemProps = {
  product: IProduct & { count: number };
  setItemsCount?: (id: number, newCount: number) => void;
  onDelete?: (id: number) => void;
};

export const CartItem: FC<TCartItemProps> = ({
  product,
  setItemsCount = () => {},
  onDelete = () => {},
}) => {
  const { id, image, name, price, count } = product;
  const buttonCounterClass = `resp-[width/32/32] resp-[height/32/32]
  flex items-center justify-center border
  hover:border-primary hover:text-gray-white
  disabled:border-elements
  disabled:border-icons
  disabled:fill-icons
  disabled:dark:bg-opacity-0
  dark:border-dark-elements
  dark:text-gray-white
  disabled:dark:!border disabled:dark:border-dark-icons dark:bg-dark-elements
  dark:hover:bg-dark-icons
  dark:fill-dark-white dark:disabled:fill-dark-icons`;

  const handlePlusClicked = () => {
    setItemsCount(id, count + 1);
  };
  const handleMinusClicked = () => {
    setItemsCount(id, count - 1);
  };

  return (
    <div className="flex flex-col items-stretch sm:flex-row resp-[gap-x/24/24] resp-[gap-y/16/16] sm:justify-between border border-elements dark:border-none dark:bg-dark-surface-1 px-[16px] py-[16px] lg:py-[24px] lg:px-[24px]">
      <div className="flex items-center resp-[gap-x/24/24]">
        <button
          onClick={() => onDelete(id)}
          className="fill-icons dark:fill-dark-icons hover:fill-primary hover:dark:fill-dark-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4716 4.4714C12.7319 4.21105 12.7319 3.78894 12.4716 3.52859C12.2112 3.26824 11.7891 3.26824 11.5288 3.52859L8.00016 7.05719L4.47157 3.52859C4.21122 3.26824 3.78911 3.26824 3.52876 3.52859C3.26841 3.78894 3.26841 4.21105 3.52876 4.4714L7.05735 7.99999L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.9428L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99999L12.4716 4.4714Z"
            />
          </svg>
        </button>
        <img
          src={image}
          alt={name}
          className="resp-[w-max/80/66] resp-[h-max/80/66]"
        />
        <p className="title-5">{name}</p>
      </div>
      <div className="flex justify-between sm:justify-end flex-grow items-center sm:resp-[gap-x/24/24]">
        <div className="flex items-center">
          <button
            className={buttonCounterClass}
            onClick={handleMinusClicked}
            disabled={count === 1}
          >
            <svg
              className=""
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z"
              />
            </svg>
          </button>
          <p className="resp-[width/32/32] block text-center title-5">
            {count}
          </p>
          <button className={buttonCounterClass} onClick={handlePlusClicked}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.6665 3.33334C8.6665 2.96515 8.36803 2.66667 7.99984 2.66667C7.63165 2.66667 7.33317 2.96515 7.33317 3.33334V7.33334H3.33317C2.96498 7.33334 2.6665 7.63182 2.6665 8.00001C2.6665 8.3682 2.96498 8.66667 3.33317 8.66667H7.33317V12.6667C7.33317 13.0349 7.63165 13.3333 7.99984 13.3333C8.36803 13.3333 8.6665 13.0349 8.6665 12.6667V8.66667H12.6665C13.0347 8.66667 13.3332 8.3682 13.3332 8.00001C13.3332 7.63182 13.0347 7.33334 12.6665 7.33334H8.6665V3.33334Z"
              />
            </svg>
          </button>
        </div>
        <p className="title-3 sm:resp-[width/80/80] sm:text-right">{`$${
          price * count
        }`}</p>
      </div>
    </div>
  );
};
