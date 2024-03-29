import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IFormValues {
  name: string;
  country: string;
  file: FileList;
  date: string;
  agreementCheck: boolean;
  filter: string;
  [index: string]: string | boolean | FileList;
}

export interface IInputProps {
  id: string;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
  labelContent?: string;
  required?: boolean;
  error?: FieldError;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  register: UseFormRegister<IFormValues>;
}
