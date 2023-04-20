export interface Category {
  id: number;
  menuId?: string;
  accountId?: string;
  name: string;
  description: string;
  archived: boolean;
  products?: Product[] | null;
  alwaysOpen: boolean;
  day?: null;
  openTime?: null;
  closeTime?: null;
  openAllDay?: null;
  hours?: null[] | null;
  adminIndex?: number;
  code?: number;
}
export interface Product {
  _id: string;
  image: ProductImage[];
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
  indexInCategory?: number;
}

export interface ProductImage {
  storageName: string;
  downloadUrl: string;
}
export interface ModifierGroupsEntity {
  id?: string;
  description?: string;
  price?: number;
  image?: string;
  created_at?: string;
  updated_at?: string;
  printName?: string;
  printModifiersAsItems?: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  description: string;
  price: number;
  id?: number;
}

type ModifierProductEntity = Omit<Product, 'modifierGroups'>;
export type CategoryViseProducts = { [Key: string]: Product[] };

export interface ProductSortData {
  _id: string;
  indexInCategory: number;
}

export interface ProductBoolFieldUpdateData {
  _id: string;
  fieldName: string;
  value: boolean;
}
