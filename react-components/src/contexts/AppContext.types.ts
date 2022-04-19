import { ApiSearchData } from 'api/Api.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';

export interface IAppContextProvider {
  children: JSX.Element;
}

export interface IAppContext {
  formData: Array<ICardContribute>;
  searchData: Array<ApiSearchData>;
  updateFormData: (value: ICardContribute) => void;
  updateSearchData: (value: ApiSearchData[]) => void;
}
