import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BannerSlider.css';

export const BannerSlider: FC = () => {
  const swiperStyles = 'flex justify-center mySwiper py-';
  const slideStyles = `flex justify-center resp-[gap-x/16/16]`;

  const bigImageStyles = `sm:block hidden object-contain resp-[width/1040/320]`;
  const smallImageStyles = `block sm:hidden object-contain`;

  const buttonStyles = `sm:flex hidden items-center justify-center
    top-0
    resp-[width/32/32]
    border border-solid border-icons
    dark:bg-dark-surface-2`;
  const buttonStylesLeft = `swipe-left dark:border-none ${buttonStyles}`;
  const buttonStylesRight = `swipe-right dark:border-none ${buttonStyles}`;
  const slideNumeration = [1, 2, 3];

  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={{ nextEl: '.swipe-right', prevEl: '.swipe-left' }}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={swiperStyles}
    >
      {slideNumeration.map((slideNumber) => (
        <SwiperSlide key={slideNumber}>
          <div className={slideStyles}>
            <button
              type="button"
              aria-label="arrow-left"
              className={buttonStylesLeft}
            >
              <img
                src='../src/assets/icons/arrow-left.svg'
                className='resp-[width/32/32]'
              />
            </button>

            <img
              src='../src/components/widgets/BannerSlider/assets/Banner.png'
              alt='Banner'
              className={bigImageStyles}
            />

            <img
              src=
                '../src/components/widgets/BannerSlider/assets/SmallBanner.png'
              alt='Banner'
              className={smallImageStyles}
            />

            <button
              type="button"
              aria-label="arrow-right"
              className={buttonStylesRight}
            >
              <img
                src='../src/assets/icons/arrow-right.svg'
                className='resp-[width/32/32]'
              />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
