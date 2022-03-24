import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('LocalStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
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

    const input = container.querySelector('.search-input') as Element;
    userEvent.type(input, 'value');
    unmount();
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('search', 'value');
  });
});
