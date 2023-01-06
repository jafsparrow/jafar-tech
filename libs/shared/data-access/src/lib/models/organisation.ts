import {
  Category,
  Product,
  TableSection,
  Tax,
} from '@jafar-tech/shared/data-access';

export interface Organisation {
  _id: string;
  name: string;
  caption: string;
  type: string[];
  address: string;
  coord: string[];
  license: string;
  openAllWeek: boolean;
  offDays: string[];
  products?: Product[];
  categories?: Category[];
  tableSections?: TableSection[];
  isRegistrationComplete?: boolean;
  taxes?: Tax[];
  currencyCode?: string;
  country?: string;
}
