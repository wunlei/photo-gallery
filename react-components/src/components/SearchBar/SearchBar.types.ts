export interface PropsSearchBar {
  handleInputChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  reference: React.RefObject<HTMLInputElement>;
}

export interface StateSearchBar {
  inputValue: string;
}
