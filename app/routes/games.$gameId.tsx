import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getGame } from "~/models/game.server";

export const loader = async ({ params }: any) => {
  const game = await getGame(params.gameId);
  if (!game) throw new Response("Not Found", { status: 404 });
  return game as Game;
};

export default function GameDetails() {
  const game = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{game.name}</h1>
      <p className="mb-4">{game.description}</p>
      <h2 className="text-xl font-semibold mb-2">Tests</h2>
      <ul>
        {game.tests.map((test: Test) => (
          <li key={test.id} className="mb-2">
            <h3 className="font-semibold">{test.title}</h3>
            <p>{test.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
