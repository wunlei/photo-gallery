export interface PropsCard {
  id: string;
  imgUrl: string;
  author: string;
  description: string;
}

export interface StateCard {
  isActive: boolean;
  data: PhotoData;
}

export interface PhotoData {
  downloads?: number;
  likes?: number;
  location?: string;
  tags?: string;
  urls?: string;
  user?: string;
  alt_description?: string;
  sourceLink?: string;
}
