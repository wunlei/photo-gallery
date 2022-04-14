import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  accept?: string;
}

function FileInput(props: IProps) {
  return (
    <div className="form-input-container">
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.labelContent}
        <input
          type="file"
          id={props.id}
          className={props.inputClassName}
          required={props.required}
          accept={props.accept}
          {...props.register(props.name, { required: props.required, onChange: props.onChange })}
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

export default FileInput;
