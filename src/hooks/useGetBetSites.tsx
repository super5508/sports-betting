import { useMemo } from "react";

import { useConstantsQuery } from "../@generated/graphql/types-and-hooks";

export type BetSite = {
  id: number;
  name: string;
  iconImage: string;
};

export const useGetBetSites = () => {
  const { data } = useConstantsQuery();
  const sites = useMemo<BetSite[]>(() => {
    const result: BetSite[] = [];
    data?.constants?.betSites?.forEach((site) => {
      if (site) {
        result.push({
          id: site.id,
          iconImage: site.iconImage,
          name: site.name,
        });
      }
    });
    return result;
  }, [data?.constants?.betSites]);

  return sites;
};
