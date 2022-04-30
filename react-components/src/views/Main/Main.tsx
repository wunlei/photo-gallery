import React, { useEffect } from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Select from 'components/Input/Select';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { ApiResponse } from 'api/Api.types';
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

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector<RootState, boolean>((state) => state.app.isLoading);

  const searchData = useSelector<RootState, ApiResponse>((state) => state.app.searchData);

  const orientation = useSelector<RootState, string>((state) => state.app.orientation);
  const order = useSelector<RootState, string>((state) => state.app.order);
  const sorting = useSelector<RootState, string>((state) => state.app.sorting);
  const elemCount = useSelector<RootState, string>((state) => state.app.elemCount);
  const pageNum = useSelector<RootState, string>((state) => state.app.pageNum);
  const searchQuery = useSelector<RootState, string>((state) => state.app.searchQuery);

  const error = useSelector<RootState, string | undefined>((state) => state.app.error);

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
          labelClassName="form-select form-input"
          labelContent="Sorting"
          data={['likes asc.', 'likes desc.']}
          id={''}
          name={''}
          onChange={(e) => {
            dispatch(updateSorting(e.target.value));
            const data = sortSearchData(searchData.results, e.target.value);
            dispatch(updateSearchData({ ...searchData, results: data }));
          }}
          placeholder={'Select sorting'}
          value={sorting}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Orientation"
          data={['landscape', 'portrait', 'squarish']}
          id={''}
          name={''}
          onChange={(e) => {
            dispatch(updateOrientation(e.target.value));
          }}
          value={orientation}
          placeholder={'Select orientation'}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Order"
          data={['latest', 'relevant']}
          id={''}
          name={''}
          onChange={(e) => {
            dispatch(updateOrder(e.target.value));
          }}
          value={order}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Elements on page"
          data={['5', '10', '15', '20']}
          id={''}
          name={''}
          onChange={(e) => {
            dispatch(updateElemCount(e.target.value));
          }}
          value={elemCount}
        />
      </div>
      <Pagination
        currentPage={pageNum}
        pageCount={searchData.total_pages || 1}
        handlePageUpdate={(value) => {
          dispatch(updatePageNumber(value));
        }}
      />
      <div className="cards-container">
        {isLoading ? <Loader /> : null}
        {error ? (
          <div>Something went wrong</div>
        ) : searchData.results.length === 0 ? (
          <div>No results</div>
        ) : (
          searchData.results.map((data) => (
            <Card
              key={data.id}
              imgUrl={data.urls.regular}
              author={data.user.name}
              id={data.id}
              description={data.alt_description}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default MainPage;
