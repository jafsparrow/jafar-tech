import { FormatedCountry } from './countries';

export enum UserType {
  ADMIN = 'admin',
  ONLINE = 'online',
  TABLE = 'table',
  STAFF = 'staff',
  TAKEAWAY = 'takeaway',
}

export interface User {
  email?: string;
  companyId?: string;
  firstName: string;
  lastName?: string;
  username?: string;
  userType: UserType;
  token?: string;
  country?: FormatedCountry;
}

export interface LoginData {
  email: string;
  password: string;
}
