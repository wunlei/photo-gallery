export interface ICardContribute {
  name: string;
  country: string;
  imgUrl: string;
  date: string;
  filter: string;
}

export interface FormErrors {
  [index: string]: string | undefined;
  name: string;
  country: string;
  file: string;
  date: string;
  agreement: string;
  filter: string;
}

export interface IFormProps {
  handleCardsUpdate: (data: ICardContribute) => void;
}

export interface IFormState {
  errors: FormErrors;
  isSubmitBtnDisabled: boolean;
  submitBtnText: string;
}
