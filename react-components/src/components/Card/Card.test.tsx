import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from 'views/Main/Main';
import { setupServer } from 'msw/node';
import { SearchData } from 'mock/SearchData';
import { handlers } from 'mock/ApiHandlers';

describe('API Test', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    server.close();
  });

  afterAll(() => server.close());

  test('Get data and render cards', async () => {
    render(<MainPage />);
    const searchBar = screen.getByTestId('search-bar') as HTMLInputElement;
    userEvent.type(searchBar, 'test');
    expect(searchBar).toBeInTheDocument();
    const btn = screen.getByTestId('search-btn');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);

    await waitFor(() =>
      expect(screen.getByAltText(SearchData[0].alt_description)).toBeInTheDocument()
    );
  });
});
