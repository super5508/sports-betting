import { useEffect, useState } from "react";
import {
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
  useBetCacheSubscription,
} from "../@generated/graphql/types-and-hooks";

import { setBetValue } from "../utils/bet";

export const useBetCache = (
  league: LeagueEnum,
  betMarketType: BetMarketTypeEnumTypeTwo
) => {
  const [gameIds, setGameIds] = useState<string[]>([]);
  const { data: subscriptionData } = useBetCacheSubscription({
    variables: {
      request: {
        league: league,
        betMarketType: betMarketType,
      },
    },
  });

  useEffect(() => {
    const newIds: string[] = [];
    subscriptionData?.betCache?.forEach((cache) => {
      if (cache?.gameId) {
        newIds.push(cache.gameId);
      }
    });
    setGameIds((prev) => {
      const missingIds: string[] = [];
      newIds.forEach((id) => {
        if (!prev.includes(id)) {
          missingIds.push(id);
        }
      });
      if (missingIds.length < 1) {
        return prev;
      }
      return [...prev, ...missingIds];
    });
  }, [subscriptionData]);

  useEffect(() => {
    subscriptionData?.betCache?.forEach((cache) => {
      if (
        !!cache?.gameId &&
        (cache?.conditions ?? []).length > 0 &&
        (cache?.listings ?? []).length > 0
      ) {
        cache.conditions?.forEach((condition, index) => {
          const siteId = cache.listings?.[index]?.site?.id;
          if (condition?.teamId && siteId && condition.betValue !== undefined) {
            setBetValue(
              cache.gameId,
              condition.teamId,
              siteId,
              condition.betValue,
              cache?.listings[index]?.americanOdds
            );
          }
        });
      }
    });
  }, [subscriptionData]);

  return [gameIds];
};
