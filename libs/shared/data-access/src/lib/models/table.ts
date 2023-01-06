export interface Table {
  id: number;
  tableNumber?: number;
  capacity: number;
  password: number;
  isOccupied: boolean;
  tableSectionId: string;
}

export interface TableSection {
  _id: string;
  name: string;
}
