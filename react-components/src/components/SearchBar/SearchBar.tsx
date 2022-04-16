import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { PropsSearchBar } from './SearchBar.types';
import './SearchBar.scss';

function SearchBar(props: PropsSearchBar) {
  const [searchValue, setSearchValue] = useState<string>(setUpValue);

  function setUpValue() {
    const searchValue = localStorage.getItem('search');
    if (searchValue) {
      return searchValue;
    }
    return '';
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    return localStorage.setItem('search', searchValue);
  }, [searchValue]);

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <label className="search-label" htmlFor="search">
          <input
            className="search-input"
            type="text"
            name="search"
            id="search"
            onChange={handleInput}
            value={searchValue}
            placeholder="Search..."
            data-testid={'search-bar'}
          />
        </label>
        <button
          className="search-btn"
          onClick={() => {
            props.handleInputChange(searchValue);
          }}
          data-testid={'search-btn'}
        >
          <SearchIcon className="search-btn__icon" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
