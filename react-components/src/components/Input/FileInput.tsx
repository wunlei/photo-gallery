import React from 'react';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  accept?: string;
  reference: React.RefObject<HTMLInputElement>;
}

function FileInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelContent}
        <input
          type="file"
          id={props.id}
          name={props.name}
          className={props.inputClassName}
          required={props.required}
          ref={props.reference}
          onChange={props.onChange}
          accept={props.accept}
        />
      </label>
      {props.error ? <div className="form-error-message">{props.error}</div> : ''}
    </div>
  );
}

export default FileInput;
