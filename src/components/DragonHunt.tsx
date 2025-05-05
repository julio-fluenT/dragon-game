import { useState } from "react";
import { useGame } from "@/context/GameContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { HuntResult } from "@/types";

const DragonHunt = () => {
  const { state, huntDragon } = useGame();
  const [isHunting, setIsHunting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<HuntResult | null>(null);

  const handleHunt = () => {
    setIsHunting(true);

    // Simuler un délai pour l'animation
    setTimeout(() => {
      const huntResult = huntDragon();
      setResult(huntResult);
      setIsHunting(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Chasse au dragon</CardTitle>
          <CardDescription>
            Chance de succès: {state.totalChance}%
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleHunt}
            disabled={isHunting || state.totalChance === 0}
            className="w-full"
          >
            {isHunting ? "Chasse en cours..." : "Partir à la chasse"}
          </Button>
          {state.huntHistory.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">
                Historique des chasses
              </h3>
              <div className="space-y-2">
                {state.huntHistory.slice(0, 5).map((hunt, index) => (
                  <div key={index} className="text-sm flex justify-between">
                    <span>{new Date(hunt.timestamp).toLocaleTimeString()}</span>
                    <span
                      className={
                        hunt.success ? "text-green-500" : "text-red-500"
                      }
                    >
                      {hunt.success ? "Succès" : "Échec"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {result?.success ? "Félicitations !" : "Dommage !"}
            </DialogTitle>
            <DialogDescription>
              {result?.success
                ? "Vous avez réussi à capturer le dragon !"
                : "Le dragon s'est échappé. Essayez d'améliorer votre équipement."}
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Chance: {result?.chancePercentage}%</p>
              <p className="text-sm">
                Valeur obtenue: {result?.randomValue.toFixed(2)}
              </p>
            </div>
            <Button onClick={() => setShowResult(false)}>Fermer</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DragonHunt;
