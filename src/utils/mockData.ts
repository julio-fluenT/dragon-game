import { Item, Player } from "@/types";

// list of available items
export const AVAILABLE_ITEMS: Record<string, Item> = {
  OBJ001: { id: "OBJ001", name: "Lame des Sept Mers", chanceBonus: 20 },
  OBJ002: { id: "OBJ002", name: "Cuirasse Antique", chanceBonus: 8 },
  OBJ003: { id: "OBJ003", name: "Collier de Durée", chanceBonus: 12 },
  OBJ004: { id: "OBJ004", name: "Bottes de Rapidité", chanceBonus: 5 },
  OBJ005: { id: "OBJ005", name: "Hache Sanglante", chanceBonus: 18 },
};

// default player
export const PLAYER: Player = {
  id: "PLAYER_001",
  pseudo: "Joueur 1",
};
