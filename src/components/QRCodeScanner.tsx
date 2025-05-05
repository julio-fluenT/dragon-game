import { useState } from "react";
import { useGame } from "@/context/GameContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const QRCodeScanner = () => {
  const [itemCode, setItemCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { state, addItem } = useGame();

  const handleScan = () => {
    setError(null);
    setSuccess(false);

    if (!itemCode.trim()) {
      setError("Veuillez entrer un code");
      return;
    }

    const item = state.availableItems[itemCode];
    if (!item) {
      setError("Code invalide");
      return;
    }

    // Vérifier si l'objet est déjà dans l'inventaire
    const alreadyOwned = state.playerItems.some((i) => i.id === item.id);
    if (alreadyOwned) {
      setError("Vous possédez déjà cet objet");
      return;
    }

    addItem(itemCode);
    setSuccess(true);
    setItemCode("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scanner un QR Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              placeholder="Entrez le code de l'objet"
              className={cn(error && "border-destructive")}
            />
            <Button onClick={handleScan}>Scanner</Button>
          </div>

          {error && <p className="text-destructive text-sm">{error}</p>}

          {success && (
            <p className="text-primary text-sm">
              Objet ajouté à votre inventaire !
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeScanner;
