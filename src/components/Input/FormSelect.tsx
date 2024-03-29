import { IInputProps } from './Inputs.types';

interface IProps extends IInputProps {
  placeholder?: string;
  data: string[];
}

function FormSelect(props: IProps) {
  return (
    <div className="form-input-container">
      <select
        id={props.id}
        required={props.required}
        className={props.labelClassName}
        defaultValue=""
        {...props.register(props.name, { required: props.required, onChange: props.onChange })}
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

export default FormSelect;
