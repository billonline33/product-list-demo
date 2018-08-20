import React from 'react';
import { Link } from 'react-router-dom';
import { getProductPageUrl } from '../../utils';

const PaginationControl = props => {
  const { pageNumber, pageSize, totalProducts, maxPageNumbersToShow } = props;
  const pageNumbers = [];
  const nPages = maxPageNumbersToShow;
  const lastPage = Math.ceil(totalProducts / pageSize);

  for (var i = pageNumber; i < pageNumber + nPages; i++) {
    if (i <= lastPage) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="listing_navigation">
      <Link
        to={getProductPageUrl(pageNumber - 1, pageSize)}
        className={pageNumber === 1 ? 'listing_navigation__disabled' : ''}
      >
        {'<'} Previous page{' '}
      </Link>
      {pageNumbers.map(item => {
        return (
          <Link
            to={getProductPageUrl(item, pageSize)}
            className={pageNumber === item ? 'listing_navigation__active' : ''}
            key={item}
          >
            {item}
          </Link>
        );
      })}
      <Link
        to={getProductPageUrl(pageNumber + 1, pageSize)}
        className={
          pageNumber === lastPage ? 'listing_navigation__disabled' : ''
        }
      >
        Next page >
      </Link>
    </div>
  );
};

export default PaginationControl;
