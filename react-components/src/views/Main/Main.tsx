import React, { useContext, useEffect, useState } from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchResults } from 'api/Api';
import { AppContext } from 'contexts/AppContext';
import Select from 'components/Input/Select';
import Pagination from 'components/Pagination/Pagination';
import './Main.scss';

function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    searchData,
    updateSearchData,
    filtersState,
    filtersDispatch,
    searchQuery,
    photoData,
    updateSearchQuery,
  } = useContext(AppContext);

  async function handleInputChange(value: string) {
    if (value) {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        setIsLoading(true);
        const data = await getSearchResults(
          trimmedValue,
          filtersState.pageNum,
          filtersState.elemCount,
          filtersState.order,
          filtersState.orientation
        );
        setIsLoading(false);
        updateSearchQuery(trimmedValue);
        updateSearchData(data, filtersState.sorting);
      }
    }
  }

  async function handleFiltersChange() {
    const data = await getSearchResults(
      searchQuery,
      filtersState.pageNum,
      filtersState.elemCount,
      filtersState.order,
      filtersState.orientation
    );
    updateSearchData(data, filtersState.sorting);
  }

  useEffect(() => {
    if (searchQuery) {
      handleFiltersChange();
    }
  }, [filtersState]);

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
            filtersDispatch({ type: 'sorting', value: e.target.value });
          }}
          placeholder={'Select sorting'}
          value={filtersState.sorting}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Orientation"
          data={['landscape', 'portrait', 'squarish']}
          id={''}
          name={''}
          onChange={(e) => {
            filtersDispatch({ type: 'orientation', value: e.target.value });
          }}
          value={filtersState.orientation}
          placeholder={'Select orientation'}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Order"
          data={['latest', 'relevant']}
          id={''}
          name={''}
          onChange={(e) => {
            filtersDispatch({ type: 'order', value: e.target.value });
          }}
          value={filtersState.order}
        />
        <Select
          labelClassName="form-select form-input"
          labelContent="Elements on page"
          data={['5', '10', '15', '20']}
          id={''}
          name={''}
          onChange={(e) => {
            filtersDispatch({ type: 'elemCount', value: e.target.value });
          }}
          value={filtersState.elemCount}
        />
      </div>
      <Pagination
        currentPage={filtersState.pageNum}
        pageCount={searchData.total_pages || 1}
        handlePageUpdate={(value) => {
          filtersDispatch({ type: 'pageNum', value: value });
        }}
      />
      <div className="cards-container">
        {isLoading ? <Loader /> : null}
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
    </main>
  );
}

export default MainPage;
