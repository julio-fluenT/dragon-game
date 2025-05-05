import { GameProvider } from "@/context/GameContext";
import Inventory from "@/components/Inventory";
import QRCodeScanner from "@/components/QRCodeScanner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import DragonHunt from "@/components/DragonHunt";

const GameContent = () => {
  // Initialize local storage during component mount
  useLocalStorage();
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🐲 Chasse au Dragon
        </h1>
        <p className="text-lg text-gray-600">
          Collectez des objets et tentez votre chance!
        </p>
      </header>

      <div className="space-y-6">
        <QRCodeScanner />
        <Inventory />
        <DragonHunt />
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        <p>Mini-jeu Julio - 2025</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;
