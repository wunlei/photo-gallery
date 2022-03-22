import React from 'react';
import './SearchBar.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

interface IState {
  inputValue: string;
}

class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
              onInput={this.handleInput}
              value={this.state.inputValue}
              placeholder="Search..."
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
