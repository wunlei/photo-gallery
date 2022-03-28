import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

interface ILocalStorageItems {
  [index: string]: string;
}

describe('LocalStorage Mock', () => {
  beforeEach(() => {
    const localStorageItems: ILocalStorageItems = {};

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key) => localStorageItems[key]),
        setItem: jest.fn((key, value) => {
          localStorageItems[key] = value.toString();
        }),
      },
      writable: true,
    });
  });

  it('Should call localStorage getItem on init', () => {
    render(<SearchBar />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('Should call localStorage setItem on unmount', () => {
    const { container, unmount } = render(<SearchBar />);

    const input = container.querySelector('.search-input') as HTMLInputElement;
    userEvent.type(input, 'value');
    unmount();
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('search', 'value');
  });

  it('Should put value from localstorage on init', () => {
    const inputValue = 'value';
    window.localStorage.setItem('search', inputValue);

    const { container } = render(<SearchBar />);
    const input = container.querySelector('.search-input') as HTMLInputElement;
    expect(input.value).toEqual(inputValue);
  });
});
