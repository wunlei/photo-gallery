import React from 'react';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  placeholder?: string;
  data: string[];
  reference: React.RefObject<HTMLSelectElement>;
}

function Select(props: IProps) {
  return (
    <div className="form-input-container">
      <select
        name={props.name}
        id={props.id}
        required={props.required}
        ref={props.reference}
        className={props.labelClassName}
        onChange={props.onChange}
        defaultValue=""
      >
        <option disabled hidden value="">
          {props.placeholder}
        </option>
        {props.data.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>

      {props.error ? <div className="form-error-message">{props.error}</div> : ''}
    </div>
  );
}

export default Select;
