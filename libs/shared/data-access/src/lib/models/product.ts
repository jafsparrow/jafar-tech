export interface Product {
  id: string;
  name: string;
  price: number;
  type: string;
  image?: string;
  description?: string;
  isActive?: boolean;
}
