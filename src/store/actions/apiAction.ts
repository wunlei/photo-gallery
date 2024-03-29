import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSearchResults } from 'api/Api';
import { ApiResponse, GetSearchResultsParams } from 'api/Api.types';

export const fetchPhotos = createAsyncThunk<
  ApiResponse,
  GetSearchResultsParams,
  Record<string, never>
>('app/fetchPhotos', async (value: GetSearchResultsParams) => {
  const { query, pageNum, pageLimit, order, orientation } = value;
  const response = await getSearchResults(query, pageNum, pageLimit, order, orientation);
  return response;
});
