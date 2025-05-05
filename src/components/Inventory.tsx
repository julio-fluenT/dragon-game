import { useGame } from "@/context/GameContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Inventory = () => {
  const { state } = useGame();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Votre inventaire</CardTitle>
      </CardHeader>
      <CardContent>
        {state.playerItems.length === 0 ? (
          <p className="text-muted-foreground">
            Vous n'avez pas encore d'objets
          </p>
        ) : (
          <div className="space-y-4">
            {state.playerItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    +{item.chanceBonus}% de chance
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span>Chance totale:</span>
                <span>{state.totalChance}%</span>
              </div>
              <Progress value={state.totalChance} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Inventory;
