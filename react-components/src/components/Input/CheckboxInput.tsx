import React from 'react';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  checked?: boolean;
  reference: React.RefObject<HTMLInputElement>;
}

function CheckboxInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        <input
          type="checkbox"
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
      {props.error ? <div className="form-error-message">{props.error}</div> : ''}
    </div>
  );
}

export default CheckboxInput;
