import React, { useEffect } from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Select from 'components/Input/Select';
import Pagination from 'components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fetchPhotos } from 'store/actions/apiAction';
import {
  updateElemCount,
  updateOrder,
  updateOrientation,
  updatePageNumber,
  updateSearchData,
  updateSearchQuery,
  updateSorting,
} from 'store/slices/appSlice';
import './Main.scss';
import { sortSearchData } from 'utils/sortSearchData';
import {
  elemCountSelector,
  errorSelector,
  isLoadingSelector,
  orderSelector,
  orientationSelector,
  pageNumSelector,
  searchDataSelector,
  searchQuerySelector,
  sortingSelector,
} from 'store/selectors/selectors';

const selectFiltersProps = {
  sorting: {
    id: 'sorting',
    name: 'sorting',
    labelClassName: 'form-select form-input',
    labelContent: 'Sorting',
    data: ['likes asc.', 'likes desc.'],
    placeholder: 'Select sorting',
  },
  orientation: {
    id: 'orientation',
    name: 'orientation',
    labelClassName: 'form-select form-input',
    labelContent: 'Orientation',
    data: ['landscape', 'portrait', 'squarish'],
    placeholder: 'Select orientation',
  },
  order: {
    id: 'order',
    name: 'order',
    labelClassName: 'form-select form-input',
    labelContent: 'Order',
    data: ['latest', 'relevant'],
  },
  count: {
    id: 'count',
    name: 'count',
    labelClassName: 'form-select form-input',
    labelContent: 'Elements on page',
    data: ['5', '10', '15', '20'],
  },
};

function MainPage() {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(isLoadingSelector);

  const searchData = useAppSelector(searchDataSelector);

  const hasSearchData = searchData.results.length > 0;

  const orientation = useAppSelector(orientationSelector);
  const order = useAppSelector(orderSelector);
  const sorting = useAppSelector(sortingSelector);
  const elemCount = useAppSelector(elemCountSelector);
  const pageNum = useAppSelector(pageNumSelector);
  const searchQuery = useAppSelector(searchQuerySelector);

  const error = useAppSelector(errorSelector);

  async function handleInputChange(value: string) {
    if (value) {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        dispatch(updateSearchQuery(trimmedValue));
      }
    }
  }

  async function handleFiltersChange(pageNum: string) {
    await dispatch(
      fetchPhotos({
        query: searchQuery,
        pageNum: pageNum,
        pageLimit: elemCount,
        order: order,
        orientation: orientation,
      })
    );
  }

  useEffect(() => {
    if (searchQuery) {
      handleFiltersChange('1');
      dispatch(updatePageNumber('1'));
    }
  }, [order, orientation, elemCount, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      handleFiltersChange(pageNum);
    }
  }, [pageNum]);

  return (
    <main className="page page-main">
      <h3 className="page__title">Search for images</h3>
      <SearchBar handleInputChange={handleInputChange} />
      <div className="filters-container">
        <Select
          id={selectFiltersProps.sorting.id}
          name={selectFiltersProps.sorting.name}
          labelClassName={selectFiltersProps.sorting.labelClassName}
          labelContent={selectFiltersProps.sorting.labelContent}
          data={selectFiltersProps.sorting.data}
          onChange={(e) => {
            dispatch(updateSorting(e.target.value));
            const data = sortSearchData(searchData.results, e.target.value);
            dispatch(updateSearchData({ ...searchData, results: data }));
          }}
          placeholder={selectFiltersProps.sorting.placeholder}
          value={sorting}
        />
        <Select
          id={selectFiltersProps.orientation.id}
          name={selectFiltersProps.orientation.name}
          labelClassName={selectFiltersProps.orientation.labelClassName}
          labelContent={selectFiltersProps.orientation.labelContent}
          data={selectFiltersProps.orientation.data}
          onChange={(e) => {
            dispatch(updateOrientation(e.target.value));
          }}
          value={orientation}
          placeholder={selectFiltersProps.orientation.placeholder}
        />
        <Select
          id={selectFiltersProps.order.id}
          name={selectFiltersProps.order.name}
          labelClassName={selectFiltersProps.order.labelClassName}
          labelContent={selectFiltersProps.order.labelContent}
          data={selectFiltersProps.order.data}
          onChange={(e) => {
            dispatch(updateOrder(e.target.value));
          }}
          value={order}
        />
        <Select
          id={selectFiltersProps.count.id}
          name={selectFiltersProps.count.name}
          labelClassName={selectFiltersProps.count.labelClassName}
          labelContent={selectFiltersProps.count.labelContent}
          data={selectFiltersProps.count.data}
          onChange={(e) => {
            dispatch(updateElemCount(e.target.value));
          }}
          value={elemCount}
        />
      </div>

      <>
        {isLoading && <Loader />}
        {error && <div>Something went wrong</div>}
        {!hasSearchData && !error && <div>No results</div>}
        {hasSearchData && !error && (
          <>
            <Pagination
              currentPage={pageNum}
              pageCount={searchData.total_pages || 1}
              handlePageUpdate={(value) => {
                dispatch(updatePageNumber(value));
              }}
            />
            <div className="cards-container">
              {searchData.results.map((data) => (
                <Card
                  key={data.id}
                  imgUrl={data.urls.regular}
                  author={data.user.name}
                  id={data.id}
                  description={data.alt_description}
                />
              ))}
            </div>
          </>
        )}
      </>
    </main>
  );
}

export default MainPage;
