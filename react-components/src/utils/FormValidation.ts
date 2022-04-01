export function getNameValidity(element: HTMLInputElement | null) {
  if (element) {
    const name = element.value;
    const regSymbols = /^[a-z ]+$/gim;
    if (!name && element.required) {
      return 'This field is required';
    } else {
      if (!name.match(regSymbols)) {
        return 'Use latin letters and space only';
      }
      if (name.length > 25 || name.length < 3) {
        return 'Name must be at least 3 characters long, max 25';
      }
    }
  }
  return '';
}

export function getCountryValidity(element: HTMLSelectElement | null) {
  if (element) {
    const country = element.value;
    if (!country && element.required) {
      return 'This field is required';
    }
  }
  return '';
}

export function getFileValidity(element: HTMLInputElement | null) {
  if (element && element.files) {
    const file = element.files[0];
    if (!file && element.required) {
      return 'This field is required';
    }
  }
  return '';
}

export function getDateValidity(element: HTMLInputElement | null) {
  if (element) {
    const date = element.value;
    if (!date && element.required) {
      return 'This field is required';
    }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const chosenDate = new Date(date);
    chosenDate.setHours(0, 0, 0, 0);

    if (chosenDate.getTime() > currentDate.getTime()) {
      return "You can't set future date";
    }
  }
  return '';
}

export function getRadioGroupValidity(...group: Array<HTMLInputElement | null>) {
  const isNoCheck = group.some((el) => el?.checked);
  if (!isNoCheck) {
    return 'This field is required';
  }
  return '';
}

export function getCheckboxValidity(element: HTMLInputElement | null) {
  if (element) {
    const checkbox = element.checked;
    if (!checkbox) {
      return 'This field is required';
    }
  }
  return '';
}
