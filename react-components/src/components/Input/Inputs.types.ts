export interface IInputProps {
  id: string;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
  labelContent?: string;
  required?: boolean;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
