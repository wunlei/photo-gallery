interface IProps {
  placeholder?: string;
  data: string[];
  id: string;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
  labelContent?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value: string;
}

function Select(props: IProps) {
  return (
    <div className="form-input-container">
      {props.labelContent}
      <select
        id={props.id}
        className={props.labelClassName}
        onChange={props.onChange}
        value={props.value}
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
    </div>
  );
}

export default Select;
