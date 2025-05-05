import { createContext, useContext, useReducer, ReactNode } from "react";
import { gameReducer, initialState } from "./gameReducer";
import { GameState, GameAction, HuntResult } from "@/types";

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  addItem: (itemCode: string) => void;
  huntDragon: () => HuntResult;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const addItem = (itemCode: string) => {
    const item = state.availableItems[itemCode];
    if (item) {
      dispatch({ type: "ADD_ITEM", payload: item });
    }
  };

  const huntDragon = () => {
    const randomValue = Math.random() * 100;
    const success = randomValue <= state.totalChance;

    const result: HuntResult = {
      timestamp: Date.now(),
      success,
      chancePercentage: state.totalChance,
      randomValue,
    };

    dispatch({ type: "HUNT_DRAGON", payload: result });
    return result;
  };

  return (
    <GameContext.Provider value={{ state, dispatch, addItem, huntDragon }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
