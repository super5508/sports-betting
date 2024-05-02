export type BetValue = {
  value: number | undefined;
  americanOdd: number | undefined | null;
  lastUpdated: number;
};

export const betValues: Map<string, BetValue> = new Map();

export const generateKey = (gameId: string, teamId: number, siteId: number) => {
  const key = `game:${gameId}::team:${teamId}::site:${siteId}`;
  return key;
};

export const setBetValue = (
  gameId: string,
  teamId: number,
  siteId: number,
  value: number,
  americanOdd: number | null | undefined
) => {
  const key = generateKey(gameId, teamId, siteId);
  const prevValue = betValues.get(key);
  let newValue = prevValue?.value;
  let newAmericanOdds = prevValue?.americanOdd;
  let flag = false;
  if (prevValue?.value !== value && !!value) {
    newValue = value;
    flag = true;
  }
  if (prevValue?.americanOdd !== americanOdd && !!americanOdd) {
    newAmericanOdds = americanOdd;
    flag = true;
  }
  if (flag) {
    betValues.set(key, {
      americanOdd: newAmericanOdds,
      lastUpdated: Date.now(),
      value: newValue,
    });
  }
};

export const getBetValue = (gameId: string, teamId: number, siteId: number) => {
  const key = generateKey(gameId, teamId, siteId);
  return betValues.get(key);
};

export const initBetValue = () => {
  betValues.clear();
};
