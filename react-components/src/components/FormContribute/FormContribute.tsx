import React from 'react';
import FileInput from 'components/Input/FileInput';
import Select from 'components/Input/Select';
import TextInput from 'components/Input/TextInput';
import DateInput from 'components/Input/DateInput';
import countriesList from './CountriesList';
import { IFormProps, IFormState } from './FormContribute.types';

class FromContribute extends React.Component<IFormProps, IFormState> {
  form = React.createRef<HTMLFormElement>();
  name = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  fileInput = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();

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
  }
  handleInputChange() {
    this.setState({ isSubmitBtnDisabled: false });
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
