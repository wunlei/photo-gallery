import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { SearchData } from 'mock/SearchData';
import { handlers } from 'mock/ApiHandlers';
import AppRouter from 'components/AppRouter/AppRouter';

describe('API Test', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    server.close();
  });

  afterAll(() => server.close());

  test('Get data and render cards', async () => {
    render(<AppRouter></AppRouter>);
    const searchBar = screen.getByTestId('search-bar') as HTMLInputElement;
    userEvent.type(searchBar, 'test');
    expect(searchBar).toBeInTheDocument();
    const btn = screen.getByTestId('search-btn');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);

    await waitFor(() =>
      expect(screen.getByAltText(SearchData[0].alt_description)).toBeInTheDocument()
    );

    const card = document.querySelector('.card') as HTMLDivElement;
    userEvent.click(card);

    await waitFor(() => {
      expect(screen.getByTestId('card-modal')).toBeInTheDocument();
    });
  });
});
