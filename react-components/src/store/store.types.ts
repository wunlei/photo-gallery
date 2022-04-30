import { ApiResponse } from 'api/Api.types';
import { PhotoData } from 'components/Card/Card.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';

export interface appState {
  sorting: string;
  orientation: string;
  order: string;
  elemCount: string;
  pageNum: string;
  formData: Array<ICardContribute>;
  searchData: ApiResponse;
  photoData: PhotoData;
  searchQuery: string;
  status: string;
  error?: string;
  isLoading: boolean;
}
