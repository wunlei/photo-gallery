import React from 'react';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  checked?: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

function RadioInput(props: IProps) {
  return (
    <label htmlFor={props.id} className={props.labelClassName}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        className={props.inputClassName}
        required={props.required}
        ref={props.reference}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.labelContent}
    </label>
  );
}

export default RadioInput;
