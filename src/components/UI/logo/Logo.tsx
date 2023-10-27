/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { handleBackToTop } from '~components/widgets/Footer/utils/handleScrollTo';

import png from './assets/ok.svg';

type TLogo = {
  position?: 'header' | 'footer';
  onTitleChange: (title: string) => void;
};

export const Logo: FC<TLogo> = ({ position = 'header', onTitleChange }) => {
  const handleLogoClick = () => {
    if (position === 'footer') {
      handleBackToTop();
    }

    onTitleChange('');
  };

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="uppercase inline-block text-primary font-extrabold resp-[font/13/13] resp-[line-height/10/11] tracking-[0.1px] sm:tracking-[0px] dark:text-dark-white"
    >
      <span className="block relative">
        Nice
        <img
          className="inline resp-[width/10/10] ml-[1px] sm:top-[-2px] absolute"
          src={png}
          alt="ok"
        />
      </span>
      <span>Gadgets</span>
    </Link>
  );
};
