import { ApiSearchData } from 'api/Api.types';
import { PhotoData } from 'components/Card/Card.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';

export interface IAppContextProvider {
  children: JSX.Element;
}

export interface IAppContext {
  formData: Array<ICardContribute>;
  searchData: Array<ApiSearchData>;
  searchQuery: string;
  filtersState: IFiltersState;
  photoData: PhotoData;
  updateFormData: (value: ICardContribute) => void;
  updateSearchData: (value: ApiSearchData[], sorting: string) => void;
  filtersDispatch: (value: DispatchValue) => void;
  updatePhotoData: (value: PhotoData) => void;
  updateSearchQuery: (value: string) => void;
}

export interface DispatchValue {
  type: string;
  value: string;
}

export interface IFiltersState {
  sorting: string;
  orientation: string;
  order: string;
  elemCount: string;
}

export type Reducer<State, Action> = (state: State, action: Action) => State;
