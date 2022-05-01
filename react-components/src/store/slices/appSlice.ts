import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from 'api/Api.types';
import { PhotoData } from 'components/Card/Card.types';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';
import { fetchPhotos } from 'store/actions/apiAction';
import { AppState } from 'store/store.types';
import { sortSearchData } from 'utils/sortSearchData';

const initialState: AppState = {
  sorting: '',
  orientation: '',
  order: 'relevant',
  elemCount: '10',
  pageNum: '1',
  formData: [],
  searchData: { total: 1, total_pages: 1, results: [] },
  photoData: {},
  searchQuery: '',
  status: '',
  error: '',
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    updateOrientation(state, action: PayloadAction<string>) {
      state.orientation = action.payload;
    },
    updateOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
    updateElemCount(state, action: PayloadAction<string>) {
      state.elemCount = action.payload;
    },
    updateSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    updatePageNumber(state, action: PayloadAction<string>) {
      state.pageNum = action.payload;
    },
    updateFormData(state, action: PayloadAction<ICardContribute>) {
      state.formData = [...state.formData, action.payload];
    },
    updateSearchData(state, action: PayloadAction<ApiResponse>) {
      state.searchData = action.payload;
    },
    updatePhotoData(state, action: PayloadAction<PhotoData>) {
      state.photoData = action.payload;
    },
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = undefined;
        const sortedData = sortSearchData(action.payload.results, state.sorting);
        state.searchData = { ...action.payload, results: sortedData };
        state.isLoading = false;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const {
  updateOrder,
  updateElemCount,
  updateOrientation,
  updateSorting,
  updatePageNumber,
  updateFormData,
  updatePhotoData,
  updateSearchData,
  updateSearchQuery,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
