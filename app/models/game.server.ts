import { json } from "@remix-run/node";
import gamesData from "../data/games.json";

export async function getGames() {
  return gamesData.games;
}

export async function getGame(id: string) {
  return gamesData.games.find((game) => game.id === id);
}
