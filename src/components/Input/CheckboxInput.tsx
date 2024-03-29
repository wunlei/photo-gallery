import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  checked?: boolean;
}

function CheckboxInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        <input
          type="checkbox"
          id={props.id}
          className={props.inputClassName}
          required={props.required}
          checked={props.checked}
          {...props.register(props.id, { required: props.required, onChange: props.onChange })}
        />
        {props.labelContent}
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

export default CheckboxInput;
