import { RootState } from 'store/store';
import { AppState } from 'store/store.types';

export const appSelector = (state: RootState): AppState => state.app;

export const sortingSelector = (state: RootState) => appSelector(state).sorting;

export const orientationSelector = (state: RootState) => appSelector(state).orientation;

export const orderSelector = (state: RootState) => appSelector(state).order;

export const elemCountSelector = (state: RootState) => appSelector(state).elemCount;

export const pageNumSelector = (state: RootState) => appSelector(state).pageNum;

export const formDataSelector = (state: RootState) => appSelector(state).formData;

export const searchDataSelector = (state: RootState) => appSelector(state).searchData;

export const photoDataSelector = (state: RootState) => appSelector(state).photoData;

export const searchQuerySelector = (state: RootState) => appSelector(state).searchQuery;

export const statusSelector = (state: RootState) => appSelector(state).status;

export const errorSelector = (state: RootState) => appSelector(state).error;

export const isLoadingSelector = (state: RootState) => appSelector(state).isLoading;
