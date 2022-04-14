import { getNameValidityMessage } from 'utils/FormValidation';
import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  novalidate: boolean;
}

function TextInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelContent}
        <input
          type="text"
          id={props.id}
          className={props.inputClassName}
          {...props.register(props.name, {
            required: props.required,
            onChange: props.onChange,
            validate: (value) => {
              if (typeof value === 'string') {
                return getNameValidityMessage(value);
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

export default TextInput;
