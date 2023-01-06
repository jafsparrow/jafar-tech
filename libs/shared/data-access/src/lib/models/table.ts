export interface Table {
  id: number;
  capacity: number;
  password: number;
  isOccupied: boolean;
  tableSectionId: string;
}

export interface TableSection {
  id: string;
  name: string;
}
