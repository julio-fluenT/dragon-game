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

// Type for the hunt result
export interface HuntResult {
  timestamp: number;
  success: boolean;
  chancePercentage: number;
  randomValue: number;
}
// Type for the game state
export interface GameState {
  player: Player;
  playerItems: Item[];
  totalChance: number;
  huntHistory: HuntResult[];
  availableItems: Record<string, Item>;
}

// Type for the game action
export type GameAction =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "HUNT_DRAGON"; payload: HuntResult }
  | { type: "RESET_GAME" };
