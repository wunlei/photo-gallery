export interface CardModalProps {
  imgUrl: string;
  description: string;
  likes: number;
  downloads: number;
  author: string;
  location: string;
  tags: string;
  handleClose: () => void;
}

export type CardModalState = Record<string, never>;
