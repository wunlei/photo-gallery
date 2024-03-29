import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  checked?: boolean;
  value: string;
}

function RadioInput(props: IProps) {
  return (
    <label htmlFor={props.id} className={props.labelClassName}>
      <input
        type="radio"
        id={props.id}
        className={props.inputClassName}
        required={props.required}
        value={props.value}
        checked={props.checked}
        {...props.register(props.name, { required: props.required, onChange: props.onChange })}
      />
      {props.labelContent}
    </label>
  );
}

export default RadioInput;
