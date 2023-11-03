/* eslint-disable no-console */
/* eslint-disable max-len */
import { FC } from 'react';
import { PhoneOptionsPicker } from './Description/PhoneOptionsPicker';
import { Description } from './Description/Description';
import { TechDescription } from './Description/TechDescription';
import { PhotoSwipe } from './Description/PhotoSwipe';
import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '~public/initial_data/products.json';
import phones from '~public/initial_data/phones.json';
import tablets from '~public/initial_data/tablets.json';
import accessories from '~public/initial_data/accessories.json';
import { IPhoneDetailed } from '~types/IPhoneDetailed';
import { ProductsSlider } from '../ProductsSlider';

type TPhonesProps = object;

export const PhoneInfo: FC<TPhonesProps> = () => {
  const navigate = useNavigate();
  const { phoneId } = useParams();

  const tempId = phoneId?.split('-');
  let phone: IPhoneDetailed | null = null;

  if (tempId) {
    if (tempId[1] === 'iphone') {
      phone = phones.find(product => product.id === phoneId) ?? phones[0];
    } else if (tempId[1] === 'ipad') {
      phone = tablets.find(product => product.id === phoneId) ?? tablets[0];
    } else if (tempId[1] === 'watch') {
      phone = accessories.find(product => product.id === phoneId) ?? accessories[0];
    }
  }
  console.log(tempId);

  if (!phone) {
    return <div>Loading...</div>;
  }

  console.log(phone);

  // const [selectedCapacity, setSelectedCapacity] = useState(
  //   `${phone?.capacity} GB`,
  // );

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex flex-row gap-x-[8px] pt-[24px]">
        <Link to={`/`}>
          <button className="flex flex-row items-center gap-[4px]">
            <img src="src/assets/icons/home.svg" alt="home button" />
          </button>
        </Link>
        <div>
          <img
            src="src/assets/icons/arrow-right.svg"
            alt="arrow right button"
          />
        </div>
        <Link to={`/phones`}>
          <button className="flex flex-row items-center gap-[4px]">
            <p className="title-5">Phones</p>
          </button>
        </Link>
        <img src="src/assets/icons/arrow-right.svg" alt="arrow right button" />
        <div>{phone.id}</div>
      </div>
      <div className="resp-[pt/40/40] resp-[pb/16/16]">
        <button
          className="flex flex-row items-center gap-[4px]"
          onClick={handleGoBack}
        >
          <img src="src/assets/icons/arrow-left.svg" alt="back button" />
          Back
        </button>
      </div>
      <h2 className="title-2 resp-[font/32/22] flex items-center justify-start resp-[pb/40/32]">
        {phone?.name}
      </h2>
      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[65px]">
        <PhotoSwipe images={phone.images} />
        <PhoneOptionsPicker phone={phone} />
        <Description description={phone.description} />
        <TechDescription phone={phone} />
      </div>

      <ProductsSlider sliderName='You may also like' productsList={products}/>
    </div>
  );
};
