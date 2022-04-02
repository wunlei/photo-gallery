import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppRouter from './AppRouter';

test('app rendering/navigating', () => {
  render(<AppRouter></AppRouter>);

  let searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();

  const leftClick = { button: 0 };

  userEvent.click(screen.getByText(/about us/i), leftClick);
  const pageAboutUs = document.querySelector('.page-about');
  expect(pageAboutUs).toBeInTheDocument();

  userEvent.click(screen.getByText(/main/i), leftClick);
  searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();

  userEvent.click(screen.getByText(/Contribute/i), leftClick);
  const form = document.querySelector('form');
  expect(form).toBeInTheDocument();
});

test('load non-existing rout', () => {
  window.history.replaceState({}, '', '/random-route');
  render(<AppRouter></AppRouter>);
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});
