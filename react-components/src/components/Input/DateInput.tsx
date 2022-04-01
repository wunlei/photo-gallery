import React from 'react';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  reference: React.RefObject<HTMLInputElement>;
}

function DateInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelContent}
        <input
          type="date"
          id={props.id}
          name={props.name}
          className={props.inputClassName}
          required={props.required}
          ref={props.reference}
          onChange={props.onChange}
        />
      </label>
      {props.error ? <div className="form-error-message">{props.error}</div> : ''}
    </div>
  );
}

export default DateInput;
