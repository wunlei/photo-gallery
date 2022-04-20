import { authKey, BASE_URL_API, Endpoints } from 'constants/apiConstants';
import { ApiPhotoData, ApiResponse } from './Api.types';

export async function getSearchResults(
  query: string,
  pageNum = 1,
  pageLimit = 10,
  order_by = 'relevant',
  orientation?: string
): Promise<ApiResponse> {
  const url = new URL(Endpoints.search, BASE_URL_API);

  const options = {
    method: 'GET',
    headers: {
      'Accept-Version': 'v1',
      Authorization: `Client-ID ${authKey}`,
    },
  };

  url.searchParams.append('per_page', pageLimit.toString());
  url.searchParams.append('page', pageNum.toString());
  url.searchParams.append('query', query);
  url.searchParams.append('order_by', order_by);
  if (orientation) {
    url.searchParams.append('orientation', orientation);
  }

  return fetch(url.toString(), options)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error);
    });
}

export async function getPhotoDetails(id: string): Promise<ApiPhotoData> {
  const url = new URL(`${Endpoints.photo}/${id}`, BASE_URL_API);
  const options = {
    method: 'GET',
    headers: {
      'Accept-Version': 'v1',
      Authorization: `Client-ID ${authKey}`,
    },
  };
  return fetch(url.toString(), options)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error);
    });
}
