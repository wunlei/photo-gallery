import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Contribute from 'views/Contribute/Contribute';
import countriesList from './CountriesList';

test('Should render error messages for required inputs', async () => {
  Object.defineProperty(URL, 'createObjectURL', {
    writable: true,
    value: jest.fn(),
  });

  render(
    <Provider store={store}>
      <Contribute />
    </Provider>
  );

  const submitBtn = screen.getByText(/submit/i);
  const nameInput = screen.getByLabelText(/name/i);
  userEvent.type(nameInput, 'John');
  userEvent.click(submitBtn);
  await waitFor(() => {
    expect(screen.getAllByText(/required/i)).toHaveLength(5);
  });
});

test('Should render card after successful submit', async () => {
  render(
    <Provider store={store}>
      <Contribute />
    </Provider>
  );

  const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
  userEvent.type(nameInput, 'John');

  userEvent.selectOptions(screen.getByRole('combobox'), countriesList[0]);

  const fileInput = screen.getByLabelText(/upload/i) as HTMLInputElement;
  const fakeFile = new File(['hello'], 'hello.jpeg', { type: 'image/jpeg' });
  await waitFor(() => userEvent.upload(fileInput, fakeFile));

  await waitFor(() => {
    userEvent.upload(fileInput, fakeFile);
  });

  Object.defineProperty(fileInput, 'files', { value: [fakeFile] });
  Object.defineProperty(fileInput, 'value', {
    value: fakeFile.name,
  });
  fireEvent.change(fileInput);

  fireEvent.click(screen.getByText(/submit/i));

  const dateInput = screen.getByLabelText(/date/i) as HTMLInputElement;
  fireEvent.change(dateInput, { target: { value: '2020-01-01' } });

  const radio = screen.getByLabelText(/safe/i) as HTMLInputElement;
  userEvent.click(radio);

  const checkbox = screen.getByLabelText(/agree/i) as HTMLInputElement;
  userEvent.click(checkbox);

  const submitBtn = screen.getByText(/submit/i);
  userEvent.click(submitBtn);

  await waitFor(() => {
    expect(screen.getByText(/Successfully/i)).toBeInTheDocument();
  });
});
