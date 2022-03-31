export interface FormErrors {
  [index: string]: string | undefined;
  name: string;
  country: string;
  file: string;
  date: string;
  agreement: string;
  filter: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFormProps {}

export interface IFormState {
  errors: FormErrors;
  isSubmitBtnDisabled: boolean;
  submitBtnText: string;
}
