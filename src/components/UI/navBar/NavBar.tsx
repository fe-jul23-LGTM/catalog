/* eslint-disable max-len */
import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { styleForCurrentLink } from '~components/widgets/Header/helper';

type TNavBarProps = {
  isBurger?: boolean;
  onTitleChange: (title: string) => void;
};

export const NavBar: FC<TNavBarProps> = ({
  onTitleChange,
  isBurger = false,
}) => {
  const navBarStyle = classNames(
    'sm:block resp-[font/12/12] font-extrabold resp-[line-height/11/12] tracking-[0.48] uppercase',
    {
      hidden: !isBurger,
    },
  );

  const linksStyle = classNames({
    'flex resp-[gap-x/32/32] lg:resp-[gap-x/64/64]': !isBurger,
    'flex flex-col items-center resp-[gap-y/24/24]': isBurger,
  });

  return (
    <nav className={navBarStyle}>
      <ul className={linksStyle}>
        <li>
          <NavLink
            className={navStyle =>
              styleForCurrentLink(navStyle.isActive, isBurger)
            }
            to="/"
            onClick={() => onTitleChange('')}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navStyle =>
              styleForCurrentLink(navStyle.isActive, isBurger)
            }
            to="/phones"
            onClick={() => onTitleChange('Phones')}
          >
            phones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navStyle =>
              styleForCurrentLink(navStyle.isActive, isBurger)
            }
            to="/tablets"
            onClick={() => onTitleChange('Tablets')}
          >
            tablets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navStyle =>
              styleForCurrentLink(navStyle.isActive, isBurger)
            }
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
