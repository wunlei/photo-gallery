import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contribute from 'views/Contribute/Contribute';
import countriesList from './CountriesList';

test('Should render error messages for required inputs', () => {
  Object.defineProperty(URL, 'createObjectURL', {
    writable: true,
    value: jest.fn(),
  });

  render(<Contribute />);

  const submitBtn = screen.getByText(/submit/i);
  const nameInput = screen.getByLabelText(/name/i);
  userEvent.type(nameInput, 'John');
  userEvent.click(submitBtn);
  const errorsFieldsCount = document.querySelectorAll('.form-error-message').length;
  expect(screen.getAllByText(/required/i).length).toEqual(errorsFieldsCount);
});

test('Should render card after successful submit', async () => {
  render(<Contribute />);

  const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
  userEvent.type(nameInput, 'John');

  userEvent.selectOptions(screen.getByRole('combobox'), countriesList[0]);

  const fileInput = screen.getByLabelText(/upload/i) as HTMLInputElement;
  const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
  userEvent.upload(fileInput, fakeFile);

  const dateInput = screen.getByLabelText(/date/i) as HTMLInputElement;
  fireEvent.change(dateInput, { target: { value: '2020-01-01' } });

  const radio = screen.getByLabelText(/safe/i) as HTMLInputElement;
  userEvent.click(radio);

  const checkbox = screen.getByLabelText(/agree/i) as HTMLInputElement;
  userEvent.click(checkbox);

  const submitBtn = screen.getByText(/submit/i);
  userEvent.click(submitBtn);
  const submitBtnSuccess = screen.getByText(/Successfully/i);
  expect(submitBtnSuccess).toBeInTheDocument();

  const card = document.querySelector('.card-contribute');
  expect(card).toBeInTheDocument();
});
