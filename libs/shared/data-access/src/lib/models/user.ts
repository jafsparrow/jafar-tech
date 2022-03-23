export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
  STAFF = 'staff',
}

export interface User {
  email?: string;
  companyId?: string;
  firstName: string;
  lastName: string;
  username?: string;
  type: UserType;
  token?: string;
}

export interface LoginData {
  email: string;
  password: string;
}
