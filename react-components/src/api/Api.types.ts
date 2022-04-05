export interface ApiSearchData {
  id: string;
  urls: URLData;
  user: UserData;
  alt_description: string;
}

interface UserData {
  id: string;
  username: string;
  name: string;
}

interface URLData {
  regular: string;
}

export interface ApiPhotoData {
  downloads: number;
  likes: number;
  location: LocationData;
  tags: Array<TagData>;
}

interface LocationData {
  city: string;
  country: string;
}

interface TagData {
  title: string;
}

export interface ApiResponse {
  results: ApiSearchData[];
}
