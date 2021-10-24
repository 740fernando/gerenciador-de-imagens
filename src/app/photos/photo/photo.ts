

export interface Photo {

  id: number;
  postDate: Date;
  url: string;
  description: string;
  AllowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
