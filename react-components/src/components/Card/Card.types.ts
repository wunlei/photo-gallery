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

interface PhotoData {
  downloads: number;
  likes: number;
  location: string;
  tags: string;
}
