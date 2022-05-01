import React, { useReducer, useState } from 'react';
import { ApiResponse, ApiSearchData } from 'api/Api.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';
import { createContext } from 'react';
import {
  DispatchValue,
  IAppContext,
  IAppContextProvider,
  IFiltersState,
  Reducer,
} from './AppContext.types';
import { PhotoData } from 'components/Card/Card.types';

const filtersInitialState = {
  sorting: '',
  orientation: '',
  order: 'relevant',
  elemCount: '10',
  pageNum: '1',
};

const searchDataInitialState = {
  total: 1,
  total_pages: 1,
  results: [],
};

function sortSearchData(data: ApiSearchData[], sorting: string) {
  switch (sorting) {
    case 'likes asc':
      return data.sort((a, b) => a.likes - b.likes);
    case 'likes desc':
      return data.sort((a, b) => b.likes - a.likes);
    default:
      return data;
  }
}

export const AppContext = createContext<IAppContext>({
  formData: [],
  searchData: searchDataInitialState,
  searchQuery: '',
  photoData: {},
  filtersState: filtersInitialState,
  updateFormData: () => {},
  updateSearchData: () => {},
  filtersDispatch: () => {},
  updatePhotoData: () => {},
  updateSearchQuery: () => {},
});

function reducer(state: IFiltersState, action: DispatchValue) {
  switch (action.type) {
    case 'sorting':
      return { ...state, sorting: action.value };
    case 'orientation':
      return { ...state, orientation: action.value };
    case 'order':
      return { ...state, order: action.value };
    case 'elemCount':
      return { ...state, elemCount: action.value };
    case 'pageNum':
      return { ...state, pageNum: action.value };
    default:
      throw new Error();
  }
}

export function AppContextProvider(props: IAppContextProvider) {
  const [formData, setFormData] = useState<Array<ICardContribute>>([]);

  const [searchData, setSearchData] = useState<ApiResponse>(searchDataInitialState);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [photoData, setPhotoData] = useState<PhotoData>({});

  const [filtersState, filtersDispatch] = useReducer<Reducer<IFiltersState, DispatchValue>>(
    reducer,
    filtersInitialState
  );

  const defaultContext = {
    formData: formData,
    searchData: searchData,
    photoData: photoData,
    searchQuery: searchQuery,
    filtersState: filtersState,
    updateFormData: (value: ICardContribute) => {
      setFormData((prevState) => {
        return [...prevState, value];
      });
    },
    updateSearchData: (value: ApiResponse, sorting: string) => {
      const sortedData = sortSearchData(value.results, sorting);
      setSearchData({
        ...value,
        results: sortedData,
      });
    },
    filtersDispatch: (action: DispatchValue) => {
      filtersDispatch(action);
    },
    updatePhotoData: (value: PhotoData) => {
      setPhotoData(value);
    },
    updateSearchQuery: (value: string) => {
      setSearchQuery(value);
    },
  };
  return <AppContext.Provider value={defaultContext}>{props.children}</AppContext.Provider>;
}
