import { ApiSearchData } from 'api/Api.types';

export interface StateMainPage {
  data: ApiSearchData[];
  isLoading: boolean;
}
export type PropsMainPage = Record<string, never>;
