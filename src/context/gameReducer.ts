import { GameState, GameAction } from "@/types";
import { AVAILABLE_ITEMS } from "@/utils/mockData";

export const initialState: GameState = {
  player: {
    id: "1",
    pseudo: "Chasseur",
  },
  playerItems: [],
  totalChance: 0,
  huntHistory: [],
  availableItems: AVAILABLE_ITEMS,
};

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.playerItems, action.payload];
      const totalChance = updatedItems.reduce(
        (sum, item) => sum + item.chanceBonus,
        0
      );

      return {
        ...state,
        playerItems: updatedItems,
        totalChance,
      };
    }

    case "HUNT_DRAGON": {
      return {
        ...state,
        huntHistory: [...state.huntHistory, action.payload],
      };
    }

    //case "RESET_GAME": {
    //  return {};
    //}

    default:
      return state;
  }
};
