import { getDateValidityMessage, getNameValidityMessage } from './FormValidation';

describe('Test for required inputs', () => {
  it('Should return correct errors for name input', () => {
    const input = document.createElement('input');
    input.value = 'John1';
    let nameValidity = getNameValidityMessage(input.value);
    expect(nameValidity).toEqual('Use latin letters and space only');

    input.value = 'J';
    nameValidity = getNameValidityMessage(input.value);
    expect(nameValidity).toEqual('Name must be at least 3 characters long, max 25');
  });

  it('Should return correct errors for date input', () => {
    const input = document.createElement('input');
    const date = new Date(Date.now() + 86400000);
    input.value = date.toString();
    const dateValidity = getDateValidityMessage(input.value);
    expect(dateValidity).toEqual("You can't set future date");
  });
});
