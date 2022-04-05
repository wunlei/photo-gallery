import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { PropsSearchBar, StateSearchBar } from './SearchBar.types';
import './SearchBar.scss';

class SearchBar extends React.Component<PropsSearchBar, StateSearchBar> {
  constructor(props: PropsSearchBar) {
    super(props);
    this.state = {
      inputValue: this.setUpValue(),
    };
    this.handleInput = this.handleInput.bind(this);
  }

  setUpValue() {
    const searchValue = localStorage.getItem('search');
    if (searchValue) {
      return searchValue;
    }
    return '';
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.inputValue);
  }

  handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-input-container">
          <label className="search-label" htmlFor="search">
            <input
              className="search-input"
              type="text"
              name="search"
              id="search"
              onChange={this.handleInput}
              onKeyUp={this.props.handleInputChange}
              value={this.state.inputValue}
              placeholder="Search..."
              ref={this.props.reference}
            />
          </label>
          <button className="search-btn">
            <SearchIcon className="search-btn__icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
