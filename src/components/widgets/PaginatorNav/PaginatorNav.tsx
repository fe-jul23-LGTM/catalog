import { FC } from 'react';
import { ArrowButton } from '~components/UI/commonButtons/ArrowButton';
import { PageButton } from '~components/UI/commonButtons/PageButton';

type TPaginatorNavProps = {
  pageCount: number,
  pageButtonCount: number,
  currentPage: number,
  onClick: (pageNumber: number) => number;
};

function createPageArr(
  pageCount: number,
  pageButtonCount: number,
  currentPage: number,
) {
  const curPage = Math.min(Math.max(currentPage, 1), pageCount);

  let start = Math.max(1, curPage - Math.floor(pageButtonCount / 2));
  const end = Math.min(start + pageButtonCount - 1, pageCount);

  start = Math.max(1, end - pageButtonCount + 1);

  const pageArr = [];

  for (let i = start; i <= end; i++) {
    pageArr.push(i);
  }

  return pageArr;
}

export const PaginatoNav:FC<TPaginatorNavProps> = ({
  pageCount,
  pageButtonCount,
  currentPage,
  onClick,
}) => {
  const pageArr = createPageArr(
    pageCount,
    pageButtonCount,
    currentPage,
  );

  const handleButtonClick = (pageNumber: number) => {
    return function() {
      onClick(pageNumber);
    };
  };

  return (
    <div className={`flex resp-[gap-x/16/16]`}>
      <ArrowButton
        direction='left'
        onClick={handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <div className={`flex resp-[gap-x/8/8]`}>
      {pageArr.map((page) => (
        <PageButton
          key={page}
          pageNumber={page}
          selected={page === currentPage}
          onClick={handleButtonClick(page)}
        />
      ))}
      </div>
      <ArrowButton
        direction='right'
        onClick={handleButtonClick(currentPage + 1)}
        disabled={currentPage === pageCount}
      />
    </div>
  );
};
