/* eslint-disable max-len */
import { Link } from 'react-router-dom';

import png from './assets/ok.svg';

export const Logo = () => {
  return (
    <Link
      to="/"
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
