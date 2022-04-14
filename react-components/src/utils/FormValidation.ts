export function getNameValidityMessage(name: string) {
  const regSymbols = /^[a-z ]+$/gim;
  if (!name.match(regSymbols)) {
    return 'Use latin letters and space only';
  }
  if (name.length > 25 || name.length < 3) {
    return 'Name must be at least 3 characters long, max 25';
  }
  return undefined;
}

export function getDateValidityMessage(date: string) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const chosenDate = new Date(date);
  chosenDate.setHours(0, 0, 0, 0);
  if (chosenDate.getTime() > currentDate.getTime()) {
    return "You can't set future date";
  }
  return undefined;
}
