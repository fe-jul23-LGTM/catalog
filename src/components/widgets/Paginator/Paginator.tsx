import { FC, useState } from 'react';
import { PaginatoNav } from '../PaginatorNav';
import { CardItem } from '../CardItem';
import { Dropdown } from '~components/UI/Dropdown';
import { IProduct } from '~types/Product';
import { useSearchParams } from 'react-router-dom';

type TPaginatorProps = {
  itemArray: IProduct[];
  categoryTitle: string;
};

export const Paginator:FC<TPaginatorProps> = ({
  itemArray,
  categoryTitle,
}) => {
  const paginatorHeaderStyles = `py-[12px] sm:py-[16px] lg:py-[32px]`;
  const generalStyles = `flex flex-col items-center`;
  const cardLayoutStyles = `grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4`;

  const [searchParams, setSearchParams] = useSearchParams();

  const itemPerPage
    = Number(searchParams.get('itemPerPage'))
    || itemArray.length;

  const pageCount = Math.ceil(itemArray.length / itemPerPage);
  const [curPage, setCurPage] = useState(1);

  const sortedArray = itemArray
    .sort((a, b) => {
      switch (searchParams.get('sortBy')) {
        case '':
          return a.year - b.year;
        case 'Alphabetically':
          return a.name.localeCompare(b.name);
        case 'Cheapest':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  const renderArray = sortedArray
    .filter((_, id) => {
      return (id < curPage * itemPerPage && id >= (curPage - 1) * itemPerPage);
    });

  const handlePageButtonClick = (newPage: number) => {
    setCurPage(newPage);

    const params = new URLSearchParams(searchParams);

    setSearchParams(params);

    return newPage;
  };

  return (
    <div>
      <div className={paginatorHeaderStyles}>
        <h1 className='title-1 py-[8px]'>
          {categoryTitle}
        </h1>
        <p>{`${itemArray.length} models`}</p>
      </div>
      <Dropdown />
      <div className={generalStyles}>
        <div className={cardLayoutStyles}>
          {renderArray.map(item => (
            <CardItem product={item} key={item.id}/>
          ))}
        </div>
        <div className='flex resp-[my/16/16]'>
          <PaginatoNav
            pageButtonCount={4}
            pageCount={pageCount}
            currentPage={curPage}
            onClick={(page) => handlePageButtonClick(page)}
          />
        </div>
      </div>
    </div>
  );
};
