/* eslint-disable max-len */
import { FC, useState } from 'react';
import ChevronDown from './assets/chevronDown.svg';
import ChevronUp from './assets/chevronUp.svg';
import { useSearchParams } from 'react-router-dom';

const sortsBy = ['Newest', 'Alphabetically', 'Cheapest'];
const itemsPerPage = ['4', '8', '16', 'all'];

export const Dropdown: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || sortsBy[0];
  const itemPerPage = searchParams.get('itemPerPage') || itemsPerPage[0];
  const [openSort, setOpenSort] = useState(false);
  const [openItems, setOpenItems] = useState(false);

  const handleSelectItemClick = (sortField: string) => {
    const params = new URLSearchParams(searchParams);

    if (sortsBy.includes(sortField)) {
      params.set('sortBy', sortField);
      setOpenSort(!openSort);
    } else if (itemsPerPage.includes(sortField)) {
      params.set('itemPerPage', sortField);
      setOpenItems(!openItems);
    }

    setSearchParams(params);
  };

  return (
    <section className="resp-[mb/24/24] container-lg flex gap-4 pl-4">
      <div>
        <p className="text-12px resp-[mb/4/4] font-bold dark:text-dark-secondary">
          Sort by
        </p>
        <div
          className={`flex justify-between items-center p-3 font-semibold text-primary bg-white border border-icons hover:border-secondary resp-[h-max/40/40] dark:bg-dark-surface-2 dark:text-dark-white dark:border dark:border-dark-surface-2 dark:hover:border-dark-icons resp-[w-min/187/136] ${
            openSort
            && '!border !border-primary dark:!border dark:!border-dark-accent'
          }`}
          onClick={() => {
            setOpenSort(!openSort);
          }}
        >
          {sortBy}
          <img src={openSort ? ChevronUp : ChevronDown} alt="" />
        </div>
        <ul
          className={`${
            openSort
            && 'bg-white border border-elements mt-1 dark:bg-dark-black dark:text-dark-secondary dark:border dark:border-dark-elements'
          }`}
        >
          {openSort
            && sortsBy.map(item => (
              <li
                key={item}
                className="p-2 hover:text-primary hover:bg-hoverBg dark:hover:text-dark-white dark:hover:bg-dark-surface-2"
                onClick={() => handleSelectItemClick(item)}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      <div>
        <p className="text-12px resp-[mb/4/4] font-bold dark:text-dark-secondary">
          Items on page
        </p>
        <div
          className={`flex justify-between items-center p-3 font-semibold text-primary bg-white border border-icons hover:border-secondary resp-[h-max/40/40] dark:bg-dark-surface-2 dark:text-dark-white dark:border dark:border-dark-surface-2 dark:hover:border-dark-icons resp-[w-min/128/136] ${
            openItems
            && '!border !border-primary dark:!border dark:!border-dark-accent'
          }`}
          onClick={() => {
            setOpenItems(!openItems);
          }}
        >
          {itemPerPage}
          <img src={openItems ? ChevronUp : ChevronDown} alt="" />
        </div>
        <ul
          className={`${
            openItems
            && 'bg-white border border-elements mt-1 dark:bg-dark-black dark:text-dark-secondary dark:border dark:border-dark-elements'
          }`}
        >
          {openItems
            && itemsPerPage.map(amount => (
              <li
                key={amount}
                className="p-2 hover:text-primary hover:bg-hoverBg dark:hover:text-dark-white dark:hover:bg-dark-surface-2"
                onClick={() => handleSelectItemClick(amount)}
              >
                {amount}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
