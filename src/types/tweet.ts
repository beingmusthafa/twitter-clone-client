export interface Tweet {
  id: string;
  text: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt?: string;
  user?: {
    id: string;
    fullName: string;
    username: string;
  };
}

export interface TweetsResponse {
  tweets: Tweet[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}
