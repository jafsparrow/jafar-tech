export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
  STAFF = 'staff',
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  type: UserType;
  token?: string;
}

export interface LoginData {
  username: string;
  password: string;
}
