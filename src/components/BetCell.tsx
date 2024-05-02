import React, { useMemo } from "react";
import { TableCell } from "@mui/material";
import { BetSite } from "../hooks";

import { getBetValue } from "../utils/bet";
import { BetMarketTypeEnumTypeTwo } from "../@generated/graphql/types-and-hooks";

interface BetCellProps {
  gameId: string;
  teamId: number;
  site: BetSite;
  curTime: number;
  betMarketType: BetMarketTypeEnumTypeTwo;
}

const BetCellInner: React.FC<BetCellProps> = ({
  gameId,
  teamId,
  site,
  curTime,
  betMarketType,
}) => {
  const value = getBetValue(gameId, teamId, site.id);

  const cellBackground = useMemo(() => {
    if (!value) {
      return "transparent";
    }
    return value.lastUpdated > curTime - 2000 ? "red" : "transparent";
  }, [curTime, value]);

  return (
    <TableCell
      key={site.id}
      sx={{
        background: cellBackground,
      }}
    >
      {betMarketType === BetMarketTypeEnumTypeTwo.Spread && (
        <>{value?.value} </>
      )}
      {value?.americanOdd}
    </TableCell>
  );
};

export const BetCell = React.memo(BetCellInner);
