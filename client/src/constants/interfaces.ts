export interface Account {
  username: String;
  displayname?: String;
  password: String;
}

export interface User {
  username: String;
  displayname: String;
  password: String;
  following?: [User];
  followers?: [User];
  posts?: [];
  picture?: String;
  isAdmin: Boolean;
  about?: {
    summary?: String;
    work?: String;
    education?: String;
    birthday?: String;
  };
}
