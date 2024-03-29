import { getDateValidityMessage } from 'utils/FormValidation';
import { IInputProps } from './Inputs.types';

function DateInput(props: IInputProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelContent}
        <input
          type="date"
          id={props.id}
          className={props.inputClassName}
          required={props.required}
          {...props.register(props.name, {
            required: props.required,
            onChange: props.onChange,
            validate: (value) => {
              if (typeof value === 'string') {
                return getDateValidityMessage(value);
              }
            },
          })}
        />
      </label>
      {props.error ? (
        props.error?.type === 'required' ? (
          <div className="form-error-message">This field is required</div>
        ) : (
          <div className="form-error-message">{props.error.message}</div>
        )
      ) : (
        ''
      )}
    </div>
  );
}

export default DateInput;
