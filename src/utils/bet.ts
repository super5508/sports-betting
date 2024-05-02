export type BetValue = {
  value: number | undefined;
  americanOdd: number | undefined | null;
  lastUpdated: number;
};

export const generateKey = (gameId: string, teamId: number, siteId: number) => {
  const key = `game:${gameId}::team:${teamId}::site:${siteId}`;
  return key;
};
