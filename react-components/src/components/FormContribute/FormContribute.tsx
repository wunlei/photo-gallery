import React from 'react';
import { IFormProps, IFormState } from './FormContribute.types';

class FromContribute extends React.Component<IFormProps, IFormState> {
  form = React.createRef<HTMLFormElement>();

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  render() {
    return (
      <form className="form-contribute" onSubmit={this.handleSubmit} noValidate ref={this.form}>
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
