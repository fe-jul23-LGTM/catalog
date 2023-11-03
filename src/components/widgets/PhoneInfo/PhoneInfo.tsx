/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { FC } from 'react';
import { PhoneOptionsPicker } from './Description/PhoneOptionsPicker';
import { Description } from './Description/Description';
import { TechDescription } from './Description/TechDescription';
import { PhotoSwipe } from './Description/PhotoSwipe';
import { Link, useNavigate, useParams } from 'react-router-dom';
import phones from '../../../../data/initial_data/phones.json';
import { IPhoneDetailed } from '~types/IPhoneDetailed';

type TPhonesProps = object;

export const PhoneInfo: FC<TPhonesProps> = () => {
  const navigate = useNavigate();
  const { phoneId } = useParams();

  const phone: IPhoneDetailed = phones.find(product => product.id === phoneId);

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
    <div className="resp-[px/100/16] resp-[w/1136/288]">
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
    </div>
  );
};
