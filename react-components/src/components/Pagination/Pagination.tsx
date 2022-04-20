import React from 'react';
import './Pagination.scss';

interface PaginationProps {
  pageCount: number;
  handlePageUpdate: (value: string) => void;
  currentPage: string;
}

function Pagination(props: PaginationProps) {
  function switchNextPage() {
    const num = Number(props.currentPage) + 1;
    props.handlePageUpdate(num.toString());
  }

  function switchFirstPage() {
    props.handlePageUpdate('1');
  }

  function switchPreviousPage() {
    const num = Number(props.currentPage) - 1;
    props.handlePageUpdate(num.toString());
  }

  function switchLastPage() {
    props.handlePageUpdate(props.pageCount.toString());
  }

  function changePage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const element = event.target as HTMLDivElement;
    const pageNumber = element.textContent;
    props.handlePageUpdate(pageNumber || '1');
  }

  function getRange() {
    const active = Number(props.currentPage);

    let coeff = -2;
    if (active === 1) {
      coeff = 0;
    } else if (active === props.pageCount) {
      coeff -= 2;
    }

    const rangeLength = props.pageCount > 1 ? 5 : 1;

    return new Array(rangeLength).fill('').map(() => {
      const num = active + coeff;
      coeff += 1;
      return num;
    });
  }

  return (
    <div className="pagination">
      <button
        onClick={switchFirstPage}
        className={`pagination__btn pagination__btn_prev ${
          props.currentPage === '1' ? 'disabled' : ''
        }`}
      >
        {'<<'}
      </button>

      <button
        onClick={switchPreviousPage}
        className={`pagination__btn pagination__btn_prev ${
          props.currentPage === '1' ? 'disabled' : ''
        }`}
      >
        {'<'}
      </button>
      {getRange().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`pagination__btn ${props.currentPage === item.toString() ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        onClick={switchNextPage}
        className={`pagination__btn pagination__btn_next ${
          props.currentPage === props.pageCount.toString() ? 'disabled' : ''
        }`}
      >
        {'>'}
      </button>
      <button
        onClick={switchLastPage}
        className={`pagination__btn pagination__btn_prev ${
          props.currentPage === props.pageCount.toString() ? 'disabled' : ''
        }`}
      >
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
