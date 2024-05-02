import React from "react";
import { TableCell } from "@mui/material";

import { BetMarketTypeEnumTypeTwo } from "../@generated/graphql/types-and-hooks";
import { BetValue } from "../utils/bet";

interface BetCellProps {
  betMarketType: BetMarketTypeEnumTypeTwo;
  value: BetValue;
}

const BetCellInner: React.FC<BetCellProps> = ({ betMarketType, value }) => {
  return (
    <TableCell>
      {betMarketType === BetMarketTypeEnumTypeTwo.Spread && (
        <>{value?.value} </>
      )}
      {value?.americanOdd}
    </TableCell>
  );
};

export const BetCell = React.memo(BetCellInner);
