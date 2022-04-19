import React, { useState } from 'react';
import { ApiSearchData } from 'api/Api.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';
import { createContext } from 'react';
import { IAppContext, IAppContextProvider } from './AppContext.types';

export const AppContext = createContext<IAppContext>({
  formData: [],
  searchData: [],
  updateFormData: () => {},
  updateSearchData: () => {},
});

export function AppContextProvider(props: IAppContextProvider) {
  const [formData, setFormData] = useState<Array<ICardContribute>>([]);
  const [searchData, setSearchData] = useState<Array<ApiSearchData>>([]);

  const defaultContext = {
    formData: formData,
    searchData: searchData,
    updateFormData: (value: ICardContribute) => {
      console.log(value);
      setFormData((prevState) => {
        return [...prevState, value];
      });
    },
    updateSearchData: (value: ApiSearchData[]) => {
      setSearchData(value);
    },
  };
  return <AppContext.Provider value={defaultContext}>{props.children}</AppContext.Provider>;
}
