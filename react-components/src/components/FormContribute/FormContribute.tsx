import TextInput from 'components/Input/TextInput';
import React from 'react';
import { IFormProps, IFormState } from './FormContribute.types';

class FromContribute extends React.Component<IFormProps, IFormState> {
  form = React.createRef<HTMLFormElement>();
  name = React.createRef<HTMLInputElement>();

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
