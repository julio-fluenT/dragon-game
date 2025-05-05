import { useEffect } from "react";
import { GameState } from "../types";
import { useGame } from "../context/GameContext";

export const useLocalStorage = () => {
  const { state, dispatch } = useGame();

  // Initialize state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("dragonHuntState");
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState) as GameState;

        // Initialize player items
        if (parsedState.playerItems && parsedState.playerItems.length > 0) {
          parsedState.playerItems.forEach((item) => {
            dispatch({ type: "ADD_ITEM", payload: item });
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    }
  }, [dispatch]);

  // Save state to localStorage on every state change
  useEffect(() => {
    localStorage.setItem("dragonHuntState", JSON.stringify(state));
  }, [state]);
};
