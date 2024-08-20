import React from "react";
import { useLoaderData, Link, Outlet, useParams } from "@remix-run/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { getGames } from "~/models/game.server";

// Define the loader return type
interface LoaderData {
  games: Game[];
}

export const loader = async () => {
  const games = await getGames();
  return { games };
};

const GameLayout = () => {
  const { games } = useLoaderData<LoaderData>();
  const params = useParams();

  return (
    <div className="flex h-screen">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <GameList games={games} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:flex w-64 flex-col">
        <GameList games={games} />
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 overflow-auto">
        {params.gameId ? (
          <Outlet />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">Select a game from the menu</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => (
  <ScrollArea className="h-full">
    <div className="space-y-2 p-4">
      <h2 className="text-lg font-semibold mb-4">Games</h2>
      {games.map((game) => (
        <Link
          key={game.id}
          to={`/games/${game.id}`}
          className="block p-2 rounded hover:bg-gray-100 transition-colors"
        >
          {game.name}
        </Link>
      ))}
    </div>
  </ScrollArea>
);

export default GameLayout;
