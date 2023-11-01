import { FC } from 'react';
import { Phones } from '~components/widgets/PhoneInfo';

type TTabletsProps = object;

const phone = {
  phoneId: 802390,
  phoneName: 'Apple iPhone 11 Pro Max',
  price: 799,
  imageSrc: 'catalog/src/assets/testPhone.png',
  priceWithDiscount: 1000,
  screenSize: 6,
  typeOfDisplay: 'OLED',
  capacity: 128,
  ram: 6,
  screenResolution: '2688x1242',
  processor: 'Apple A12 Bionic',
};

export const Tablets: FC<TTabletsProps> = () => {
  return (
    // <h1 className='title-1'>Tablets</h1>
    <div>
      <Phones phone={phone} />
    </div>
  );
};
