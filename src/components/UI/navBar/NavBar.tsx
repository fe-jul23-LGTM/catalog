/* eslint-disable max-len */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { styleForCurrentLink } from '~components/widgets/Header/helper';

type TNavBarProps = {
  onTitleChange: (title:string) => void;
};

export const NavBar: FC<TNavBarProps> = ({ onTitleChange }) => {
  return (
    <nav className="hidden sm:block resp-[font/12/12] font-extrabold resp-[line-height/11/12] tracking-[0.48] uppercase">
      <ul className="flex resp-[gap-x/32/32] lg:resp-[gap-x/64/64]">
        <li>
          <NavLink
            className={styleForCurrentLink}
            to="/"
            onClick={() => onTitleChange('')}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styleForCurrentLink}
            to="/phones"
            onClick={() => onTitleChange('Phones')}
          >
            phones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styleForCurrentLink}
            to="/tablets"
            onClick={() => onTitleChange('Tablets')}
          >
            tablets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styleForCurrentLink}
            to="/accessories"
            onClick={() => onTitleChange('Accessories')}
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
