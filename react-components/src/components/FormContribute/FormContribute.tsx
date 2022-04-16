import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckboxInput from 'components/Input/CheckboxInput';
import DateInput from 'components/Input/DateInput';
import FileInput from 'components/Input/FileInput';
import RadioInput from 'components/Input/RadioInput';
import Select from 'components/Input/Select';
import TextInput from 'components/Input/TextInput';
import { IFormValues } from 'components/Input/Inputs.types';
import { IFormProps } from './FormContribute.types';
import { getDateValidityMessage, getNameValidityMessage } from 'utils/FormValidation';
import countriesList from './CountriesList';
import './FormContribute.scss';

function FormContribute(props: IFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isDirty },
  } = useForm<IFormValues>({
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });

  const [submitBtnText, setSubmitBtnText] = useState<string>('Submit');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setError('name', { type: 'manual', message: getNameValidityMessage(data.name) });
    setError('date', { type: 'manual', message: getDateValidityMessage(data.date) });

    if (data) {
      updateContributedCards(data);
      setSubmitBtnText('Successfully submitted!');
      handleSubmitBtnUpdate();
      reset();
    }
  };

  function updateContributedCards(data: IFormValues) {
    let url = '';
    const files = data.file;
    if (files) {
      url = URL.createObjectURL(files[0]);
    }

    const card = {
      name: data.name,
      country: data.country,
      imgUrl: url,
      date: data.date,
      filter: data.filter,
    };
    props.handleCardsUpdate(card);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (typeof event.target.name === 'string') {
      clearErrors(event.target.name);
    }
  }

  function handleSubmitBtnUpdate() {
    setTimeout(() => {
      setSubmitBtnText('Submit');
    }, 3000);
  }

  function checkIsCanSubmit() {
    if (Object.keys(errors).length === 0) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }

  useEffect(() => {
    checkIsCanSubmit();
  });

  return (
    <form className="form-contribute" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        id={'inputName'}
        name={'name'}
        labelContent={'Your Name:'}
        labelClassName={'form-label'}
        inputClassName={'input_text form-input'}
        required={true}
        error={errors.name}
        onChange={handleInputChange}
        register={register}
        data-testid={'input-name'}
      />
      <Select
        id={'countrySelect'}
        name={'country'}
        data={countriesList}
        required={true}
        labelClassName={'form-select form-input'}
        placeholder={'Choose Your Country'}
        error={errors.country}
        onChange={handleInputChange}
        register={register}
      />
      <FileInput
        id={'inputFile'}
        name={'file'}
        labelContent={'Upload your photo:'}
        labelClassName={'form-label'}
        inputClassName={'input_file'}
        required={true}
        error={errors.file}
        accept={'image/*'}
        onChange={handleInputChange}
        register={register}
      />
      <DateInput
        id={'inputDate'}
        name={'date'}
        required={true}
        labelContent={'Photo taken date:'}
        labelClassName={'form-label'}
        inputClassName={'input_date form-input'}
        onChange={handleInputChange}
        error={errors.date}
        register={register}
      />
      <fieldset className="form-fieldset fieldset_safety form-input-container">
        <legend className="fieldset_safety__legend">Photo safety level:</legend>
        <RadioInput
          id={'filterSafe'}
          name={'filter'}
          labelContent={'Safe'}
          value={'safe'}
          labelClassName={'label_radio'}
          inputClassName={'input_radio'}
          required={true}
          onChange={handleInputChange}
          register={register}
        />
        <RadioInput
          id={'filterRestricted'}
          name={'filter'}
          labelContent={'Restricted'}
          value={'restricted'}
          labelClassName={'label_radio'}
          inputClassName={'input_radio'}
          required={true}
          onChange={handleInputChange}
          register={register}
        />
        {errors.filter ? (
          errors.filter?.type === 'required' ? (
            <div className="form-error-message">This field is required</div>
          ) : (
            <div className="form-error-message">{errors.filter.message}</div>
          )
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
        error={errors.agreementCheck}
        onChange={handleInputChange}
        register={register}
      />
      <button
        type="submit"
        disabled={!isDirty || isSubmitDisabled}
        className={'form_btn btn_submit'}
      >
        {submitBtnText}
      </button>
    </form>
  );
}

export default FormContribute;
