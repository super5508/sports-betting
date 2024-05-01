import { useMemo } from "react";

import {
  LeagueEnum,
  useGamesDataQuery,
} from "../@generated/graphql/types-and-hooks";

export type TeamData = {
  name: string;
  id: number;
};

export type GameData = {
  id: string;
  homeTeam: TeamData;
  awayTeam: TeamData;
};

export const useGetGameData = (gameIds: string[], league: LeagueEnum) => {
  const { data } = useGamesDataQuery({
    variables: {
      ids: gameIds,
      league: league,
    },
    skip: gameIds.length === 0,
  });

  const gameData = useMemo<GameData[]>(() => {
    const result: GameData[] = [];
    data?.games?.forEach((game) => {
      if (
        game?.__typename === "NFLGameType" ||
        game?.__typename === "NBAGameType"
      ) {
        result.push({
          id: game.id,
          homeTeam: {
            id: game.homeTeam?.id,
            name: game.homeTeam?.name ?? "",
          },
          awayTeam: {
            id: game.awayTeam?.id,
            name: game.awayTeam?.name ?? "",
          },
        });
      }
    });
    return result;
  }, [data]);

  return gameData;
};
