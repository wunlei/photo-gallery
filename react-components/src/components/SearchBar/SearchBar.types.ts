export interface PropsSearchBar {
  handleInputChange: () => void;
  reference: React.RefObject<HTMLInputElement>;
}

export interface StateSearchBar {
  inputValue: string;
}
