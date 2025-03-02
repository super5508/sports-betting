import { useEffect, useState } from "react";
import {
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
  useBetCacheSubscription,
} from "../@generated/graphql/types-and-hooks";

import { generateKey } from "../utils/bet";
import { useBetContext } from "../context/BetContext";

export const useBetCache = (
  league: LeagueEnum,
  betMarketType: BetMarketTypeEnumTypeTwo
) => {
  const { setValue } = useBetContext();
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
        const condition = cache.conditions?.[0];
        cache.listings?.forEach((listing) => {
          if (condition && listing?.site) {
            const key = generateKey(
              cache.gameId,
              condition.teamId,
              listing.site.id
            );
            setValue(key, {
              americanOdd: listing.americanOdds,
              value: condition.betValue,
            });
          }
        });
      }
    });
  }, [setValue, subscriptionData]);

  return [gameIds];
};
