import { ApiSearchData } from 'api/Api.types';

export function sortSearchData(data: ApiSearchData[], sorting: string) {
  const array = [...data];
  switch (sorting) {
    case 'likes asc.':
      return array.sort((a, b) => a.likes - b.likes);
    case 'likes desc.':
      return array.sort((a, b) => b.likes - a.likes);
    default:
      return data;
  }
}
