export interface Account {
  username: string;
  displayname?: string;
  password: string;
}

export interface User {
  username: string;
  displayname: string;
  password: string;
  following?: [User];
  followers?: [User];
  posts?: [string];
  picture?: string;
  isAdmin: Boolean;
  about?: {
    summary?: string;
    work?: string;
    education?: string;
    birthday?: string;
  };
}
export interface Post {
  creator: string;
  body: string;
  likes?: [User];
  comments?: [Comment];
  date: Date;
  picture?: string;
}

export interface Comment {
  body: string;
  creator: string;
  date: Date;
}
