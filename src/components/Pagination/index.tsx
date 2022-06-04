import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  onChangePage: (num: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      pageCount={3}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={4}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      forcePage={currentPage - 1}
    />
  );
};
