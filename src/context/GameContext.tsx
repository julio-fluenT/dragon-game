import { createContext, useContext, useReducer, ReactNode } from "react";
import { gameReducer, initialState } from "./gameReducer";
import { GameState, GameAction } from "@/types";

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  addItem: (itemCode: string) => void;
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

  return (
    <GameContext.Provider value={{ state, dispatch, addItem }}>
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
