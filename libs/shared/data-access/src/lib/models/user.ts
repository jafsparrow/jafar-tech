export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
}

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  userType: UserType;
}
