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
  posts?: [];
  picture?: string;
  isAdmin: Boolean;
  about?: {
    summary?: string;
    work?: string;
    education?: string;
    birthday?: string;
  };
}
