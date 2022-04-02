import userEvent from '@testing-library/user-event';
import {
  getCheckboxValidity,
  getCountryValidity,
  getDateValidity,
  getFileValidity,
  getNameValidity,
  getRadioGroupValidity,
} from './FormValidation';

describe('Test for required inputs', () => {
  it('Should return empty string for valid value', () => {
    const input = document.createElement('input');
    input.required = true;
    input.value = 'value';

    const nameValidity = getNameValidity(input);
    expect(nameValidity).toEqual('');
    const dateValidity = getDateValidity(input);
    expect(dateValidity).toEqual('');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    userEvent.upload(fileInput, fakeFile);

    const fileValidity = getFileValidity(fileInput);
    expect(fileValidity).toEqual('');

    const checkedInput = document.createElement('input');
    checkedInput.required = true;
    checkedInput.checked = true;

    const radioValidity = getRadioGroupValidity(checkedInput);
    expect(radioValidity).toEqual('');

    const checkboxValidity = getCheckboxValidity(checkedInput);
    expect(checkboxValidity).toEqual('');
  });

  it('Should return error if no value passed', () => {
    const input = document.createElement('input');
    input.required = true;

    const select = document.createElement('select');
    select.required = true;

    const nameValidity = getNameValidity(input);
    expect(nameValidity).toEqual('This field is required');
    const dateValidity = getDateValidity(input);
    expect(dateValidity).toEqual('This field is required');

    const countryValidity = getCountryValidity(select);
    expect(countryValidity).toEqual('This field is required');

    const checkedInput = document.createElement('input');
    checkedInput.required = true;
    checkedInput.checked = false;

    const radioValidity = getRadioGroupValidity(checkedInput);
    expect(radioValidity).toEqual('This field is required');

    const checkboxValidity = getCheckboxValidity(checkedInput);
    expect(checkboxValidity).toEqual('This field is required');
  });

  it('Should return correct errors for name input', () => {
    const input = document.createElement('input');
    input.value = 'John1';
    let nameValidity = getNameValidity(input);
    expect(nameValidity).toEqual('Use latin letters and space only');

    input.value = 'J';
    nameValidity = getNameValidity(input);
    expect(nameValidity).toEqual('Name must be at least 3 characters long, max 25');
  });

  it('Should return correct errors for date input', () => {
    const input = document.createElement('input');
    const date = new Date(Date.now() + 86400000);
    input.value = date.toString();
    const dateValidity = getDateValidity(input);
    expect(dateValidity).toEqual("You can't set future date");
  });
});
