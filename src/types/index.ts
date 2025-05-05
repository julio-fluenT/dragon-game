// type for the items
export interface Item {
  id: string;
  name: string;
  chanceBonus: number;
  description?: string;
  imageUrl?: string;
}

// type for the player
export interface Player {
  id: string;
  pseudo: string;
}
