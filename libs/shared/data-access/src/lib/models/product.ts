// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   type: string;
//   image?: string;
//   description?: string;
//   isActive?: boolean;
// }

import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface Category {
  id: number;
  menuId: string;
  accountId: string;
  name: string;
  description: string;
  archived: string;
  products?: Product[] | null;
  alwaysOpen: boolean;
  day?: null;
  openTime?: null;
  closeTime?: null;
  openAllDay?: null;
  hours?: null[] | null;
}
export interface Product {
  _id: string;
  image: string;
  description: string;
  isAvailable: boolean;
  onSale: boolean;
  price: number;
  name: string;
  category: string;
  archived: boolean;
  video?: string;
  popular: boolean;
  printName?: string;
  modifierGroups?: ModifierGroupsEntity[] | null;
}
export interface ModifierGroupsEntity {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  created_at: string;
  updated_at: string;
  printName?: string;
  printModifiersAsItems: boolean;
  products?: ModifierProductEntity[] | null;
}

type ModifierProductEntity = Omit<Product, 'modifierGroups'>;
export type CategoryViseProducts = { [Key: string]: Product[] };
