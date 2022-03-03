export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  type: UserType;
}
