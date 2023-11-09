import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '~context/Theme';
import arrowRightLight from '~assets/icons/arrow-right.svg';
import arrowRightDark from '~assets/icons/arrow-right-dark.svg';
import homeImage from '~assets/icons/home.svg';
import homeImageDark from '~assets/icons/home-dark.svg';

type TBreadcrumbsProps = {
  categoryTitle: string;
};

export const Breadcrumbs: FC<TBreadcrumbsProps> = ({ categoryTitle }) => {
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';

  return (
    <div className="flex flex-row gap-x-[8px] pt-[24px] items-center">
      <Link to={`/`}>
        <button className="flex flex-row items-center gap-[4px]">
          <img
            src={isLightTheme ? homeImage : homeImageDark}
            alt="home button"
          />
        </button>
      </Link>
      <div>
        <img
          src={isLightTheme ? arrowRightLight : arrowRightDark}
          alt="arrow right button"
        />
      </div>
      <div className="dark:text-dark-secondary">{categoryTitle}</div>
    </div>
  );
};
