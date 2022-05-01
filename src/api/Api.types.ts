export interface ApiSearchData {
  id: string;
  urls: URLData;
  user: UserData;
  alt_description: string;
  likes: number;
}

export interface UserData {
  id: string;
  username: string;
  name: string;
}

export interface URLData {
  regular: string;
}

export interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface ApiPhotoData {
  downloads: number;
  likes: number;
  location: LocationData;
  tags: Array<TagData>;
  user: UserData;
  alt_description: string;
  urls: URLData;
  links: PhotoLinks;
}

interface LocationData {
  city: string;
  country: string;
}

interface TagData {
  title: string;
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: ApiSearchData[];
}

export interface GetSearchResultsParams {
  query: string;
  pageNum: string;
  pageLimit: string;
  order: string;
  orientation?: string;
}
