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
  comments: [
    {
      body: string;
      creator: User;
      date: Date;
    }
  ];
  date: Date;
  picture?: string;
}
