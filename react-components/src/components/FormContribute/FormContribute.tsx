import React from 'react';
import FileInput from 'components/Input/FileInput';
import Select from 'components/Input/Select';
import TextInput from 'components/Input/TextInput';
import DateInput from 'components/Input/DateInput';
import RadioInput from 'components/Input/RadioInput';
import CheckboxInput from 'components/Input/CheckboxInput';
import countriesList from './CountriesList';
import { IFormProps, IFormState } from './FormContribute.types';
import {
  getCheckboxValidity,
  getCountryValidity,
  getDateValidity,
  getFileValidity,
  getNameValidity,
  getRadioGroupValidity,
} from 'utils/FormValidation';

class FromContribute extends React.Component<IFormProps, IFormState> {
  form = React.createRef<HTMLFormElement>();
  name = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  fileInput = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  filterSafe = React.createRef<HTMLInputElement>();
  filterRestricted = React.createRef<HTMLInputElement>();
  agreement = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      errors: {
        name: '',
        country: '',
        file: '',
        date: '',
        agreement: '',
        filter: '',
      },
      isSubmitBtnDisabled: true,
      submitBtnText: 'Submit',
    };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState((state) => {
      const currErrors = {
        name: getNameValidity(this.name.current),
        country: getCountryValidity(this.country.current),
        file: getFileValidity(this.fileInput.current),
        date: getDateValidity(this.date.current),
        filter: getRadioGroupValidity(this.filterSafe.current, this.filterRestricted.current),
        agreement: getCheckboxValidity(this.agreement.current),
      };

      const isAllValid = Object.values(currErrors).every((el) => el === '');
      let currSubmitBtnText = state.submitBtnText;
      if (isAllValid) {
        currSubmitBtnText = 'Successfully submitted!';
        this.handleSubmitBtnUpdate();
        this.form.current?.reset();
      }
      return { errors: currErrors, isSubmitBtnDisabled: true, submitBtnText: currSubmitBtnText };
    });
  }

  handleInputChange() {
    this.setState({ isSubmitBtnDisabled: false });
  }

  handleSubmitBtnUpdate() {
    setTimeout(() => {
      this.setState({ submitBtnText: 'Submit' });
    }, 3000);
  }

  render() {
    return (
      <form className="form-contribute" onSubmit={this.handleSubmit} noValidate ref={this.form}>
        <TextInput
          id={'inputName'}
          name={'name'}
          labelContent={'Your Name:'}
          labelClassName={'form-label'}
          inputClassName={'input_text form-input'}
          required={true}
          error={this.state.errors.name}
          reference={this.name}
          onChange={this.handleInputChange}
          novalidate={true}
        />
        <Select
          id={'countrySelect'}
          name={'country'}
          data={countriesList}
          required={true}
          labelClassName={'form-select form-input'}
          placeholder={'Choose Your Country'}
          reference={this.country}
          error={this.state.errors.country}
          onChange={this.handleInputChange}
        />
        <FileInput
          id={'inputFile'}
          name={'file'}
          labelContent={'Upload your photo:'}
          labelClassName={'form-label'}
          inputClassName={'input_file'}
          required={true}
          error={this.state.errors.file}
          accept={'image/*'}
          reference={this.fileInput}
          onChange={this.handleInputChange}
        />
        <DateInput
          id={'inputDate'}
          name={'date'}
          reference={this.date}
          required={true}
          labelContent={'Photo taken date:'}
          labelClassName={'form-label'}
          inputClassName={'input_date form-input'}
          onChange={this.handleInputChange}
          error={this.state.errors.date}
        />
        <fieldset className="form-fieldset fieldset_safety form-input-container">
          <legend className="fieldset_safety__legend">Photo safety level:</legend>
          <RadioInput
            id={'filterSafe'}
            name={'filter'}
            labelContent={'Safe'}
            labelClassName={'label_radio'}
            inputClassName={'input_radio'}
            required={true}
            reference={this.filterSafe}
            onChange={this.handleInputChange}
          />
          <RadioInput
            id={'filterRestricted'}
            name={'filter'}
            labelContent={'Restricted'}
            labelClassName={'label_radio'}
            inputClassName={'input_radio'}
            required={true}
            reference={this.filterRestricted}
            onChange={this.handleInputChange}
          />
          {this.state.errors.filter ? (
            <div className="form-error-message">{this.state.errors.filter}</div>
          ) : (
            ''
          )}
        </fieldset>
        <CheckboxInput
          id={'agreementCheck'}
          name={'agreement'}
          labelContent={'I understand and agree submission guidelines.'}
          labelClassName={'label_checkbox'}
          inputClassName={'input_checkbox'}
          required={true}
          error={this.state.errors.agreement}
          reference={this.agreement}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          disabled={this.state.isSubmitBtnDisabled}
          className={'form_btn btn_submit'}
        >
          {this.state.submitBtnText}
        </button>
      </form>
    );
  }
}

export default FromContribute;
