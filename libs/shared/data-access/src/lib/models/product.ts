export interface Product {
  id: string;
  name: string;
  price: number;
  type: string;
  image?: string;
  description?: string;
  isActive?: boolean;
}

export interface CategorieEntity {
  id: number;
  menuId: string;
  accountId: string;
  name: string;
  description: string;
  archived: string;
  products?: ProductEntity[] | null;
  alwaysOpen: boolean;
  day?: null;
  openTime?: null;
  closeTime?: null;
  openAllDay?: null;
  hours?: null[] | null;
}
export interface ProductEntity {
  id: number;
  image: string;
  description: string;
  isAvailable: boolean;
  onSale: boolean;
  price: number;
  name: string;
  index: number;
  archived: boolean;
  video?: null;
  popular: boolean;
  printName?: null;
  snooze?: null;
  modifierGroups?: ModifierGroupsEntity[] | null;
}
export interface ModifierGroupsEntity {
  id: string;
  name: string;
  description: string;
  price?: null;
  image: string;
  created_at: string;
  updated_at: string;
  printName?: null;
  printModifiersAsItems: boolean;
  products?: ModifierProductEntity[] | null;
}

type ModifierProductEntity = Omit<ProductEntity, 'modifierGroups'>;
