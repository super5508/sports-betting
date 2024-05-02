export type BetValue = {
  value: number;
  lastUpdated: number;
};

export const generateKey = (gameId: string, teamId: number, siteId: number) => {
  const key = `game:${gameId}::team:${teamId}::site:${siteId}`;
  return key;
};
